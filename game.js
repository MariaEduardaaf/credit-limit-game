// Configurações iniciais
let progress = 0;              // Percentual da barra (0 a 100)
const progressIncrement = 5;   // Percentual adicionado a cada clique
const maxCredit = 6000;        // Limite máximo de crédito em R$
const decayRate = 0.5;         // Taxa de decaimento do progresso (%)
const decayInterval = 100;     // Intervalo de decaimento (milissegundos)
let gameActive = true;

// Elementos do DOM
const clickButton = document.getElementById('click-button');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score-display');
const successOverlay = document.getElementById('success-overlay');
const confettiContainer = document.getElementById('confetti-container');
const downloadButton = document.getElementById('download-button');

// Evento de clique: aumenta a barra, dispara o efeito de dinheiro e verifica se atingiu o limite
clickButton.addEventListener('click', () => {
  if (!gameActive) return;
  
  progress += progressIncrement;
  if (progress > 100) progress = 100;
  
  updateProgressBar();
  updateScoreDisplay();
  createMoneyEffect();

  // Se atingir 100%, mostra a tela de sucesso
  if (progress === 100) {
    gameActive = false;
    triggerSuccess();
  }
});

// Atualiza a largura da barra de progresso
function updateProgressBar() {
  progressBar.style.width = progress + '%';
}

// Atualiza o valor exibido com base no progresso (limite máximo R$6000)
function updateScoreDisplay() {
  let currentCredit = Math.floor((progress / 100) * maxCredit);
  scoreDisplay.textContent = 'R$ ' + currentCredit;
}

// Decai gradativamente o progresso da barra
function decayProgress() {
  if (progress > 0 && gameActive) {
    progress -= decayRate;
    if (progress < 0) progress = 0;
    updateProgressBar();
    updateScoreDisplay();
  }
}

// Inicia o decaimento periódico da barra
setInterval(decayProgress, decayInterval);

// Função para criar o efeito de dinheiro caindo
function createMoneyEffect() {
  const money = document.createElement('img');
  money.src = 'assets/money.png'; // Certifique-se de ter o ícone de dinheiro na pasta assets
  money.classList.add('money-effect');
  
  // Define posição inicial aleatória dentro do container do jogo
  const container = document.querySelector('.game-container');
  money.style.left = Math.floor(Math.random() * (container.clientWidth - 30)) + 'px';
  money.style.top = '0px';

  container.appendChild(money);

  // Animação de queda
  let pos = 0;
  const fallDistance = 200; // Distância da queda (pode ser ajustada)
  const fallInterval = setInterval(() => {
    pos += 5;
    money.style.top = pos + 'px';
    
    // Quando o efeito atingir a distância definida, remove o elemento
    if (pos >= fallDistance) {
      clearInterval(fallInterval);
      money.remove();
    }
  }, 30);
}

// Função para disparar o efeito de confetti e exibir o overlay de sucesso
function triggerSuccess() {
  // Dispara confetti
  for (let i = 0; i < 50; i++) {
    createConfetti();
  }
  
  // Exibe o overlay de sucesso após um pequeno delay (para deixar o confetti aparecer)
  setTimeout(() => {
    successOverlay.classList.remove('hidden');
  }, 500);
}

// Cria uma peça de confetti com cores e posições aleatórias
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  
  // Define uma cor aleatória
  const colors = ['#FFC107', '#FF5722', '#8BC34A', '#00BCD4', '#E91E63'];
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Define posição horizontal aleatória dentro do overlay
  confetti.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  confetti.style.top = '-20px'; // Inicia acima da tela
  
  // Adiciona a peça ao overlay (ou ao body)
  document.body.appendChild(confetti);
  
  // Remove o confetti após a animação (2 segundos)
  setTimeout(() => {
    confetti.remove();
  }, 2000);
}

// Exemplo de ação do botão de download (adicione o link real do seu app)
downloadButton.addEventListener('click', () => {
  window.location.href = 'https://www.seuapp.com/download'; // Substitua pelo link do seu app
});
