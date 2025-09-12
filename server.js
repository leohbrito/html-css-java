const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory storage
const rooms = new Map();
const FIBONACCI_DECK = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '?'];
const CUSTOM_DECK = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?'];

// Room class
class Room {
    constructor(roomId) {
        this.roomId = roomId;
        this.participants = new Map();
        this.votes = new Map();
        this.isRevealed = false;
        this.hostId = null;
        this.deck = FIBONACCI_DECK;
        this.deckType = 'fibonacci';
        this.timer = null;
        this.timerDuration = 0;
        this.timerStartTime = null;
        this.createdAt = Date.now();
    }

    addParticipant(socketId, name, isSpectator = false) {
        if (!this.hostId) {
            this.hostId = socketId;
        }
        this.participants.set(socketId, {
            id: socketId,
            name: name,
            isSpectator: isSpectator,
            isHost: socketId === this.hostId,
            hasVoted: false,
            avatar: this.getRandomAvatar()
        });
    }

    removeParticipant(socketId) {
        this.participants.delete(socketId);
        this.votes.delete(socketId);
        
        // Transfer host if needed
        if (this.hostId === socketId && this.participants.size > 0) {
            const firstParticipant = this.participants.keys().next().value;
            this.hostId = firstParticipant;
            const participant = this.participants.get(firstParticipant);
            if (participant) {
                participant.isHost = true;
            }
        }
    }

    castVote(socketId, value) {
        const participant = this.participants.get(socketId);
        if (participant && !participant.isSpectator) {
            this.votes.set(socketId, value);
            participant.hasVoted = true;
        }
    }

    revealVotes() {
        this.isRevealed = true;
    }

    resetVotes() {
        this.votes.clear();
        this.isRevealed = false;
        this.participants.forEach(p => {
            p.hasVoted = false;
        });
    }

    changeDeck(deckType) {
        this.deckType = deckType;
        this.deck = deckType === 'fibonacci' ? FIBONACCI_DECK : CUSTOM_DECK;
    }

    getStatistics() {
        if (!this.isRevealed) return null;

        const numericVotes = [];
        let questionMarkCount = 0;
        let abstentionCount = 0;

        // Count active participants (non-spectators)
        const activeParticipants = Array.from(this.participants.values())
            .filter(p => !p.isSpectator);

        // Process votes
        this.votes.forEach((vote, socketId) => {
            if (vote === '?') {
                questionMarkCount++;
            } else if (vote !== null && vote !== undefined) {
                const numValue = parseFloat(vote);
                if (!isNaN(numValue)) {
                    numericVotes.push(numValue);
                }
            }
        });

        // Count abstentions
        abstentionCount = activeParticipants.length - this.votes.size;

        // Calculate statistics
        let average = 0;
        let median = 0;
        let min = 0;
        let max = 0;

        if (numericVotes.length > 0) {
            average = numericVotes.reduce((a, b) => a + b, 0) / numericVotes.length;
            numericVotes.sort((a, b) => a - b);
            median = numericVotes.length % 2 === 0
                ? (numericVotes[numericVotes.length / 2 - 1] + numericVotes[numericVotes.length / 2]) / 2
                : numericVotes[Math.floor(numericVotes.length / 2)];
            min = numericVotes[0];
            max = numericVotes[numericVotes.length - 1];
        }

        return {
            average: average.toFixed(1),
            median: median.toFixed(1),
            min,
            max,
            questionMarkCount,
            abstentionCount,
            totalVotes: this.votes.size
        };
    }

    getRandomAvatar() {
        const avatars = ['👤', '🧑', '👨', '👩', '🧔', '👱', '👨‍💻', '👩‍💻', '🦸', '🦹', '🧙', '🧚'];
        return avatars[Math.floor(Math.random() * avatars.length)];
    }

    getState() {
        const participantsList = Array.from(this.participants.values());
        const votesList = this.isRevealed ? 
            Array.from(this.votes.entries()).map(([socketId, vote]) => ({
                participantId: socketId,
                participantName: this.participants.get(socketId)?.name || 'Unknown',
                value: vote
            })) : [];

        return {
            roomId: this.roomId,
            participants: participantsList,
            votes: votesList,
            isRevealed: this.isRevealed,
            hostId: this.hostId,
            deck: this.deck,
            deckType: this.deckType,
            statistics: this.getStatistics(),
            timer: {
                isActive: !!this.timer,
                duration: this.timerDuration,
                startTime: this.timerStartTime
            }
        };
    }
}

// Socket.IO event handlers
io.on('connection', (socket) => {
    console.log(`[Socket] New connection: ${socket.id}`);

    socket.on('joinRoom', ({ roomId, name, isSpectator }) => {
        console.log(`[Room] ${name} joining room ${roomId} as ${isSpectator ? 'spectator' : 'participant'}`);
        
        // Create room if it doesn't exist
        if (!rooms.has(roomId)) {
            rooms.set(roomId, new Room(roomId));
            console.log(`[Room] Created new room: ${roomId}`);
        }

        const room = rooms.get(roomId);
        room.addParticipant(socket.id, name, isSpectator);
        
        socket.join(roomId);
        socket.roomId = roomId;
        
        // Send current state to the joining user
        socket.emit('roomState', room.getState());
        
        // Broadcast updated state to all users in the room
        io.to(roomId).emit('roomState', room.getState());
    });

    socket.on('leaveRoom', () => {
        if (socket.roomId && rooms.has(socket.roomId)) {
            const room = rooms.get(socket.roomId);
            room.removeParticipant(socket.id);
            socket.leave(socket.roomId);
            
            // Broadcast updated state
            io.to(socket.roomId).emit('roomState', room.getState());
            
            // Delete room if empty
            if (room.participants.size === 0) {
                rooms.delete(socket.roomId);
                console.log(`[Room] Deleted empty room: ${socket.roomId}`);
            }
        }
    });

    socket.on('castVote', ({ roomId, value }) => {
        console.log(`[Vote] Socket ${socket.id} voted ${value} in room ${roomId}`);
        
        if (rooms.has(roomId)) {
            const room = rooms.get(roomId);
            room.castVote(socket.id, value);
            io.to(roomId).emit('roomState', room.getState());
        }
    });

    socket.on('revealVotes', ({ roomId }) => {
        if (rooms.has(roomId)) {
            const room = rooms.get(roomId);
            
            // Check if user is host
            if (room.hostId === socket.id) {
                console.log(`[Room] Revealing votes in room ${roomId}`);
                room.revealVotes();
                io.to(roomId).emit('roomState', room.getState());
            }
        }
    });

    socket.on('resetVotes', ({ roomId }) => {
        if (rooms.has(roomId)) {
            const room = rooms.get(roomId);
            
            // Check if user is host
            if (room.hostId === socket.id) {
                console.log(`[Room] Resetting votes in room ${roomId}`);
                room.resetVotes();
                io.to(roomId).emit('roomState', room.getState());
            }
        }
    });

    socket.on('changeDeck', ({ roomId, deckType }) => {
        if (rooms.has(roomId)) {
            const room = rooms.get(roomId);
            
            // Check if user is host
            if (room.hostId === socket.id) {
                console.log(`[Room] Changing deck to ${deckType} in room ${roomId}`);
                room.changeDeck(deckType);
                io.to(roomId).emit('roomState', room.getState());
            }
        }
    });

    socket.on('startTimer', ({ roomId, duration }) => {
        if (rooms.has(roomId)) {
            const room = rooms.get(roomId);
            
            // Check if user is host
            if (room.hostId === socket.id) {
                console.log(`[Timer] Starting ${duration}s timer in room ${roomId}`);
                
                // Clear existing timer
                if (room.timer) {
                    clearTimeout(room.timer);
                }
                
                room.timerDuration = duration;
                room.timerStartTime = Date.now();
                
                room.timer = setTimeout(() => {
                    console.log(`[Timer] Auto-revealing votes in room ${roomId}`);
                    room.revealVotes();
                    room.timer = null;
                    room.timerDuration = 0;
                    room.timerStartTime = null;
                    io.to(roomId).emit('roomState', room.getState());
                }, duration * 1000);
                
                io.to(roomId).emit('roomState', room.getState());
            }
        }
    });

    socket.on('stopTimer', ({ roomId }) => {
        if (rooms.has(roomId)) {
            const room = rooms.get(roomId);
            
            // Check if user is host
            if (room.hostId === socket.id) {
                console.log(`[Timer] Stopping timer in room ${roomId}`);
                
                if (room.timer) {
                    clearTimeout(room.timer);
                    room.timer = null;
                    room.timerDuration = 0;
                    room.timerStartTime = null;
                }
                
                io.to(roomId).emit('roomState', room.getState());
            }
        }
    });

    socket.on('disconnect', () => {
        console.log(`[Socket] Disconnected: ${socket.id}`);
        
        if (socket.roomId && rooms.has(socket.roomId)) {
            const room = rooms.get(socket.roomId);
            room.removeParticipant(socket.id);
            
            // Broadcast updated state
            io.to(socket.roomId).emit('roomState', room.getState());
            
            // Delete room if empty
            if (room.participants.size === 0) {
                rooms.delete(socket.roomId);
                console.log(`[Room] Deleted empty room: ${socket.roomId}`);
            }
        }
    });
});

// REST endpoints
app.get('/health', (req, res) => {
    res.json({ status: 'ok', rooms: rooms.size });
});

app.get('/rooms/:roomId', (req, res) => {
    const { roomId } = req.params;
    if (rooms.has(roomId)) {
        res.json(rooms.get(roomId).getState());
    } else {
        res.status(404).json({ error: 'Room not found' });
    }
});

// Serve index.html for room routes
app.get('/r/:roomId', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`[Server] Planning Poker server running on http://localhost:${PORT}`);
    console.log(`[Server] Try opening http://localhost:${PORT}/r/test in multiple browsers`);
});

// Cleanup old rooms (optional - runs every hour)
setInterval(() => {
    const now = Date.now();
    const maxAge = 4 * 60 * 60 * 1000; // 4 hours
    
    rooms.forEach((room, roomId) => {
        if (now - room.createdAt > maxAge && room.participants.size === 0) {
            rooms.delete(roomId);
            console.log(`[Cleanup] Deleted old room: ${roomId}`);
        }
    });
}, 60 * 60 * 1000);