# 💳 Credit Limit Game - Cartões Fácil

## Sobre o projeto

Jogo interativo para promover o aplicativo Cartões Fácil, onde o usuário clica para aumentar seu limite de crédito virtual. O jogo apresenta uma mecânica progressiva com efeitos visuais de dinheiro e uma barra de progresso que vai até R$ 6.000.

## Funcionalidades

- **Sistema de cliques** para aumentar o limite de crédito
- **Barra de progresso** visual que cresce com os cliques
- **Efeitos de dinheiro** que caem na tela a cada clique
- **Sistema de decaimento** que diminui o progresso se o usuário parar de clicar
- **Tela de sucesso** com confetes quando atinge o limite máximo
- **Call-to-action** para download do app Cartões Fácil

## Tecnologias utilizadas

- HTML5
- CSS3 (animações e transições)
- JavaScript (vanilla)
- Assets personalizados (ícone de dinheiro)

## Mecânica do jogo

### Sistema de progresso
- **Incremento por clique:** 5%
- **Limite máximo:** R$ 6.000 (100% da barra)
- **Decaimento automático:** 0.5% a cada 100ms se parar de clicar
- **Objetivo:** Atingir 100% da barra de progresso

### Efeitos visuais
- **Efeito de dinheiro:** Ícones que caem na tela a cada clique
- **Barra de progresso:** Preenchimento gradual com cor verde
- **Confetes:** Animação de celebração ao atingir o objetivo
- **Overlay de sucesso:** Tela de parabenização e call-to-action

## Como executar

1. Clone o repositório
```bash
git clone https://github.com/MariaEduardaaf/credit-limit-game.git
```

2. Abra o arquivo index.html no navegador

## Estrutura do projeto

```
credit-limit-game/
├── index.html          # Página principal do jogo
├── styles.css          # Estilos e animações
├── game.js            # Lógica do jogo
└── assets/
    └── money.png      # Ícone de dinheiro para efeitos
```

## Funcionalidades técnicas

### JavaScript
- **Event listeners** para cliques no botão
- **Sistema de timers** para decaimento do progresso
- **Criação dinâmica** de elementos para efeitos visuais
- **Controle de estado** do jogo (ativo/inativo)

### CSS
- **Animações CSS** para efeitos de dinheiro
- **Transições suaves** na barra de progresso
- **Layout responsivo** para diferentes dispositivos
- **Overlay modal** para tela de sucesso

### Configurações do jogo
```javascript
const progressIncrement = 5;   // 5% por clique
const maxCredit = 6000;        // R$ 6.000 máximo
const decayRate = 0.5;         // 0.5% de decaimento
const decayInterval = 100;     // A cada 100ms
```

## Design e interface

### Paleta de cores
- **Verde:** Para barra de progresso e sucesso
- **Azul:** Para botões e elementos interativos
- **Dourado:** Para efeitos de dinheiro
- **Branco/Cinza:** Para texto e fundo

### Responsividade
- Layout adaptável para desktop e mobile
- Botões com tamanho adequado para touch
- Efeitos visuais otimizados para diferentes telas

## Call-to-action

Ao completar o jogo, o usuário é direcionado para:
- **Google Play Store** para download do Cartões Fácil
- **Mensagem personalizada** sobre encontrar o cartão ideal
- **Botão destacado** para facilitar a conversão

## Objetivo comercial

O jogo serve como:
- **Ferramenta de engajamento** para o app Cartões Fácil
- **Gamificação** do processo de descoberta de cartões
- **Lead generation** através de interação divertida
- **Branding** da marca Cartões Fácil

## Performance

### Otimizações
- **JavaScript vanilla** para performance máxima
- **CSS animations** em vez de JavaScript para suavidade
- **Assets otimizados** para carregamento rápido
- **Event handling** eficiente para cliques

## Licença

Este projeto é uma ferramenta promocional para o aplicativo Cartões Fácil.

## Desenvolvimento

Jogo desenvolvido como estratégia de marketing interativo para aumentar downloads do app Cartões Fácil.

---

*Jogo interativo de limite de crédito para Cartões Fácil* 💳