# Planning Poker - Aplicação de Votação Ágil

Uma aplicação web completa de Planning Poker para estimativas ágeis usando a sequência de Fibonacci, com votação em tempo real via WebSocket.

## 🚀 Funcionalidades

### Menu Poder
- **Nova funcionalidade adicionada**: Menu "Poder" no header com informações detalhadas sobre o sistema
- Exibe todas as funcionalidades, instruções de uso e atalhos de teclado
- Design moderno com gradiente e ícone de raio

### Funcionalidades Principais
- ✅ Votação em tempo real com WebSocket (Socket.IO)
- ✅ Sequência Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, ?)
- ✅ Deck customizado alternativo (0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?)
- ✅ Modo espectador (observar sem votar)
- ✅ Controles exclusivos do host (primeiro a entrar)
- ✅ Timer com auto-revelação de votos
- ✅ Estatísticas automáticas (média, mediana, min, max)
- ✅ Interface responsiva (mobile e desktop)
- ✅ Atalhos de teclado

## 📦 Instalação

### Pré-requisitos
- Node.js (v14 ou superior)
- npm

### Passos de instalação

1. Clone ou baixe o projeto
2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000/r/teste
```

## 🎮 Como Usar

### Entrando em uma Sala
1. Acesse `http://localhost:3000/r/[nome-da-sala]`
2. Digite seu nome
3. Escolha se quer ser espectador (opcional)
4. Clique em "Entrar na sala"

### Votando
1. Clique em uma carta para votar
2. Aguarde outros participantes votarem
3. O host revela os votos quando todos votarem

### Controles do Host
O primeiro a entrar na sala é o host e tem acesso a:
- **Revelar Votos**: Mostra todos os votos simultaneamente
- **Resetar Votação**: Limpa votos mantendo participantes
- **Timer**: Define contagem regressiva com auto-revelação
- **Trocar Deck**: Alterna entre Fibonacci e Custom

### Atalhos de Teclado
- `1-9`: Votar com as cartas correspondentes
- `0`: Votar zero
- `?`: Votar incerteza
- `R`: Revelar votos (apenas host)
- `C`: Resetar votação (apenas host)
- `S`: Copiar link da sala

## 🧪 Testes Manuais

### Teste 1: Votação Básica
1. Abra `http://localhost:3000/r/abc` em duas abas diferentes
2. Entre com nomes diferentes (ex: "Alice" e "Bob")
3. Vote com valores diferentes em cada aba
4. Verifique que aparece "Votou" para o outro participante
5. Como host (primeira aba), clique em "Revelar Votos"
6. Confirme que ambos veem os resultados e estatísticas

### Teste 2: Modo Espectador
1. Abra uma terceira aba em `http://localhost:3000/r/abc`
2. Entre marcando "Entrar como espectador"
3. Verifique que não aparecem cartas para votar
4. Confirme que o espectador vê os participantes e resultados

### Teste 3: Timer
1. Como host, defina um timer de 30 segundos
2. Inicie o timer
3. Vote rapidamente
4. Aguarde o timer chegar a zero
5. Confirme que os votos são revelados automaticamente

### Teste 4: Troca de Deck
1. Como host, troque para o deck "Custom"
2. Verifique que as cartas mudam para incluir valores como 0.5, 20, 40, 100
3. Vote e revele para confirmar funcionamento

### Teste 5: Persistência e Reconexão
1. Entre em uma sala e vote
2. Atualize a página (F5)
3. Entre novamente com o mesmo nome
4. Verifique que a sala mantém o estado anterior

## 🔧 Configuração Avançada

### Alterando as Cartas
Para modificar os valores das cartas, edite no arquivo `server.js`:

```javascript
const FIBONACCI_DECK = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '?'];
const CUSTOM_DECK = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?'];
```

### Adicionando Persistência com Redis
Para substituir o armazenamento em memória por Redis:

1. Instale o Redis e o cliente:
```bash
npm install redis
```

2. No `server.js`, substitua o Map por Redis:
```javascript
const redis = require('redis');
const client = redis.createClient();

// Substituir rooms.set() por:
await client.set(`room:${roomId}`, JSON.stringify(roomData));

// Substituir rooms.get() por:
const roomData = await client.get(`room:${roomId}`);
```

### Adicionando Autenticação
Para adicionar autenticação OAuth:

1. Instale passport:
```bash
npm install passport passport-google-oauth20
```

2. Configure no `server.js` antes das rotas:
```javascript
const passport = require('passport');
// Configurar estratégia OAuth
app.use(passport.initialize());
```

## 🏗️ Estrutura do Projeto

```
planning-poker/
├── server.js           # Servidor Node.js com Socket.IO
├── package.json        # Dependências e scripts
├── public/
│   ├── index.html     # Interface HTML
│   ├── styles.css     # Estilos CSS
│   └── app.js         # Lógica frontend JavaScript
└── README.md          # Documentação
```

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express
- **WebSocket**: Socket.IO
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Armazenamento**: In-memory (preparado para Redis)

## 📝 Notas de Desenvolvimento

- O código está comentado para fácil manutenção
- Arquitetura preparada para escalar com Redis
- Segurança básica implementada (sanitização de inputs)
- Logs de eventos no servidor para debugging

## 🤝 Contribuindo

Para adicionar novas funcionalidades:
1. Teste localmente
2. Mantenha o padrão de código existente
3. Atualize a documentação

## 📄 Licença

MIT - Uso livre para qualquer propósito