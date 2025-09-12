// Planning Poker App - Frontend JavaScript

class PlanningPokerApp {
    constructor() {
        this.socket = null;
        this.roomId = null;
        this.userName = null;
        this.isSpectator = false;
        this.isHost = false;
        this.currentVote = null;
        this.roomState = null;
        this.timerInterval = null;
        
        this.init();
    }
    
    init() {
        // Get room ID from URL
        const pathParts = window.location.pathname.split('/');
        if (pathParts[1] === 'r' && pathParts[2]) {
            this.roomId = pathParts[2];
        } else {
            // Redirect to a default room
            window.location.href = '/r/lobby';
            return;
        }
        
        // Update room name in header
        document.getElementById('roomName').textContent = this.roomId;
        
        // Initialize Socket.IO
        this.socket = io();
        
        // Setup event listeners
        this.setupEventListeners();
        this.setupSocketListeners();
        this.setupKeyboardShortcuts();
    }
    
    setupEventListeners() {
        // Login form
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
        
        // Leave button
        document.getElementById('leaveBtn').addEventListener('click', () => {
            this.handleLeave();
        });
        
        // Share button
        document.getElementById('shareBtn').addEventListener('click', () => {
            this.copyRoomLink();
        });
        
        // Host controls
        document.getElementById('revealBtn').addEventListener('click', () => {
            this.revealVotes();
        });
        
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetVotes();
        });
        
        document.getElementById('startTimerBtn').addEventListener('click', () => {
            this.startTimer();
        });
        
        document.getElementById('stopTimerBtn').addEventListener('click', () => {
            this.stopTimer();
        });
        
        document.getElementById('deckSelect').addEventListener('change', (e) => {
            this.changeDeck(e.target.value);
        });
        
        // Power menu button
        document.getElementById('powerMenuBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            const menu = document.getElementById('powerMenu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
        
        // Close power menu when clicking outside
        document.addEventListener('click', () => {
            document.getElementById('powerMenu').style.display = 'none';
        });
        
        document.getElementById('powerMenu').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    setupSocketListeners() {
        this.socket.on('connect', () => {
            console.log('Connected to server');
        });
        
        this.socket.on('roomState', (state) => {
            console.log('Room state updated:', state);
            this.roomState = state;
            this.updateUI(state);
        });
        
        this.socket.on('disconnect', () => {
            console.log('Disconnected from server');
            this.showNotification('Conexão perdida. Tentando reconectar...', 'error');
        });
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ignore if user is typing in an input
            if (e.target.tagName === 'INPUT') return;
            
            // Number keys for voting
            if (!this.isSpectator && this.roomState && !this.roomState.isRevealed) {
                const deck = this.roomState.deck;
                
                if (e.key >= '0' && e.key <= '9') {
                    const index = parseInt(e.key);
                    if (index < deck.length) {
                        this.castVote(deck[index]);
                    }
                } else if (e.key === '?') {
                    this.castVote('?');
                }
            }
            
            // Host shortcuts
            if (this.isHost) {
                if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    this.revealVotes();
                } else if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    this.resetVotes();
                }
            }
            
            // Share shortcut
            if (e.key.toLowerCase() === 's' && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                this.copyRoomLink();
            }
        });
    }
    
    handleLogin() {
        const userName = document.getElementById('userName').value.trim();
        const isSpectator = document.getElementById('isSpectator').checked;
        
        if (!userName) {
            this.showNotification('Por favor, digite seu nome', 'error');
            return;
        }
        
        this.userName = userName;
        this.isSpectator = isSpectator;
        
        // Join room
        this.socket.emit('joinRoom', {
            roomId: this.roomId,
            name: userName,
            isSpectator: isSpectator
        });
        
        // Hide login modal and show main app
        document.getElementById('loginModal').classList.remove('active');
        document.getElementById('mainApp').classList.remove('hidden');
    }
    
    handleLeave() {
        if (confirm('Tem certeza que deseja sair da sala?')) {
            this.socket.emit('leaveRoom');
            window.location.href = '/';
        }
    }
    
    updateUI(state) {
        // Update host status
        this.isHost = state.hostId === this.socket.id;
        
        // Update participants list
        this.updateParticipantsList(state.participants);
        
        // Update host controls visibility
        if (this.isHost) {
            document.getElementById('hostControls').classList.remove('hidden');
        } else {
            document.getElementById('hostControls').classList.add('hidden');
        }
        
        // Update deck selector
        document.getElementById('deckSelect').value = state.deckType;
        
        // Update cards
        this.updateCards(state.deck, state.isRevealed);
        
        // Update voting status
        this.updateVotingStatus(state);
        
        // Update results if revealed
        if (state.isRevealed) {
            this.showResults(state);
        } else {
            document.getElementById('resultsContainer').classList.add('hidden');
        }
        
        // Update timer
        this.updateTimer(state.timer);
    }
    
    updateParticipantsList(participants) {
        const list = document.getElementById('participantsList');
        const count = document.getElementById('participantCount');
        
        count.textContent = participants.length;
        list.innerHTML = '';
        
        participants.forEach(participant => {
            const li = document.createElement('li');
            li.className = 'participant-item';
            
            const info = document.createElement('div');
            info.className = 'participant-info';
            
            const avatar = document.createElement('span');
            avatar.className = 'participant-avatar';
            avatar.textContent = participant.avatar || '👤';
            
            const name = document.createElement('span');
            name.className = 'participant-name';
            if (participant.isHost) name.classList.add('host');
            if (participant.isSpectator) name.classList.add('spectator');
            name.textContent = participant.name;
            
            info.appendChild(avatar);
            info.appendChild(name);
            
            const status = document.createElement('div');
            status.className = 'participant-status';
            
            if (!participant.isSpectator) {
                const voteStatus = document.createElement('span');
                voteStatus.className = participant.hasVoted ? 'vote-status voted' : 'vote-status not-voted';
                voteStatus.textContent = participant.hasVoted ? 'Votou' : 'Aguardando';
                status.appendChild(voteStatus);
            }
            
            li.appendChild(info);
            li.appendChild(status);
            list.appendChild(li);
        });
    }
    
    updateCards(deck, isRevealed) {
        const container = document.getElementById('cardsContainer');
        
        // Don't show cards if spectator or votes are revealed
        if (this.isSpectator || isRevealed) {
            container.innerHTML = '';
            return;
        }
        
        container.innerHTML = '';
        
        deck.forEach(value => {
            const card = document.createElement('div');
            card.className = 'card';
            if (this.currentVote === value) {
                card.classList.add('selected');
            }
            card.textContent = value;
            card.addEventListener('click', () => this.castVote(value));
            container.appendChild(card);
        });
    }
    
    updateVotingStatus(state) {
        const statusText = document.getElementById('statusText');
        
        if (this.isSpectator) {
            statusText.textContent = 'Você está no modo espectador';
        } else if (state.isRevealed) {
            statusText.textContent = 'Votos revelados - Analise os resultados';
        } else if (this.currentVote) {
            statusText.textContent = `Você votou: ${this.currentVote}`;
        } else {
            statusText.textContent = 'Escolha sua carta para votar';
        }
    }
    
    updateTimer(timer) {
        const display = document.getElementById('timerDisplay');
        const value = document.getElementById('timerValue');
        const startBtn = document.getElementById('startTimerBtn');
        const stopBtn = document.getElementById('stopTimerBtn');
        
        if (timer.isActive) {
            display.classList.remove('hidden');
            startBtn.classList.add('hidden');
            stopBtn.classList.remove('hidden');
            
            // Clear existing interval
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
            }
            
            // Update timer display
            this.timerInterval = setInterval(() => {
                const elapsed = Math.floor((Date.now() - timer.startTime) / 1000);
                const remaining = Math.max(0, timer.duration - elapsed);
                const minutes = Math.floor(remaining / 60);
                const seconds = remaining % 60;
                value.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                if (remaining === 0) {
                    clearInterval(this.timerInterval);
                }
            }, 100);
        } else {
            display.classList.add('hidden');
            startBtn.classList.remove('hidden');
            stopBtn.classList.add('hidden');
            
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
            }
        }
    }
    
    castVote(value) {
        if (this.isSpectator || this.roomState?.isRevealed) return;
        
        this.currentVote = value;
        this.socket.emit('castVote', {
            roomId: this.roomId,
            value: value
        });
        
        // Animate card selection
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('selected');
            if (card.textContent === value) {
                card.classList.add('selected');
            }
        });
    }
    
    revealVotes() {
        if (!this.isHost) return;
        this.socket.emit('revealVotes', { roomId: this.roomId });
    }
    
    resetVotes() {
        if (!this.isHost) return;
        this.currentVote = null;
        this.socket.emit('resetVotes', { roomId: this.roomId });
    }
    
    changeDeck(deckType) {
        if (!this.isHost) return;
        this.socket.emit('changeDeck', { roomId: this.roomId, deckType });
    }
    
    startTimer() {
        if (!this.isHost) return;
        const duration = parseInt(document.getElementById('timerInput').value);
        this.socket.emit('startTimer', { roomId: this.roomId, duration });
    }
    
    stopTimer() {
        if (!this.isHost) return;
        this.socket.emit('stopTimer', { roomId: this.roomId });
    }
    
    showResults(state) {
        const container = document.getElementById('resultsContainer');
        const votesGrid = document.getElementById('votesGrid');
        
        container.classList.remove('hidden');
        
        // Clear and populate votes grid
        votesGrid.innerHTML = '';
        
        state.votes.forEach(vote => {
            const card = document.createElement('div');
            card.className = 'vote-card';
            card.classList.add('flip');
            
            const name = document.createElement('div');
            name.className = 'vote-card-name';
            name.textContent = vote.participantName;
            
            const value = document.createElement('div');
            value.className = 'vote-card-value';
            if (vote.value === '?') {
                value.classList.add('question');
            }
            value.textContent = vote.value;
            
            card.appendChild(name);
            card.appendChild(value);
            votesGrid.appendChild(card);
        });
        
        // Update statistics
        if (state.statistics) {
            document.getElementById('statAverage').textContent = state.statistics.average;
            document.getElementById('statMedian').textContent = state.statistics.median;
            document.getElementById('statMin').textContent = state.statistics.min || '-';
            document.getElementById('statMax').textContent = state.statistics.max || '-';
            document.getElementById('statQuestions').textContent = state.statistics.questionMarkCount;
            document.getElementById('statAbstentions').textContent = state.statistics.abstentionCount;
        }
    }
    
    copyRoomLink() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            this.showNotification('Link da sala copiado!', 'success');
        }).catch(() => {
            this.showNotification('Erro ao copiar link', 'error');
        });
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#6366f1'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PlanningPokerApp();
});