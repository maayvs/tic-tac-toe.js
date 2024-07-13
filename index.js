const player1 = "Player 01";
const player2 = "Player 02";
const root = document.querySelector(":root");
const button01 = document.getElementById("button-01");
const button02 = document.getElementById("button-02");
const button03 = document.getElementById("button-03");
const button04 = document.getElementById("button-04");
const button05 = document.getElementById("button-05");
const button06 = document.getElementById("button-06");
const button07 = document.getElementById("button-07");
const button08 = document.getElementById("button-08");
const button09 = document.getElementById("button-09");
const restart = document.getElementById("restart");
const winner = document.getElementById("winner");
const turn = document.getElementById("player");
const buttonAlternar = document.getElementById("theme");
const buttonsPlay = document.querySelectorAll(".buttonplay");

// Condições Iniciais
let turnAtual = 1;
turn.innerText = `É sua vez: ` + player1;

// Tema dark/light
function alternarTema() {
  if (buttonAlternar.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#eff0f3");
    root.style.setProperty("--color-buttom", "#202928");
    root.style.setProperty("--color", "#202928")
    root.style.setProperty("--bg-color-buttom", "#FFFAFA")
    buttonAlternar.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--color", "#f1f5f9");
    root.style.setProperty("--color-buttom", "#212529")
    root.style.setProperty("--bg-color-buttom", "#f1f5f9")
    buttonAlternar.dataset.theme = "dark";
  }
}

buttonAlternar.addEventListener("click", alternarTema);

// Cliques no tabuleiro
buttonsPlay.forEach((button) => {
  button.addEventListener("click", function (event) {
    clickedButton = event.target;
    if (turnAtual % 2 !== 0) {
      turn.innerText = `É sua vez: ` + player2;
      clickedButton.innerText = "X";
      clickedButton.value = "X";
    } else {
      turn.innerText = `É sua vez: ` + player1;
      clickedButton.innerText = "O";
      clickedButton.value = "O";
    }
    turnAtual++;

    if (clickedButton.innerText !== " ") {
      clickedButton.disabled = true;
    }

    if (button01.value == button02.value && button01.value == button03.value && button01.value !== '') {
        verificarVencedor()
        button01.style.backgroundColor = '#8ec738'
        button02.style.backgroundColor = '#8ec738'
        button03.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button04.value == button05.value && button04.value == button06.value && button04.value !== '') {
        verificarVencedor()
        button04.style.backgroundColor = '#8ec738'
        button05.style.backgroundColor = '#8ec738'
        button06.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button07.value == button08.value && button07.value == button09.value && button07.value !== '') {
        verificarVencedor()
        button07.style.backgroundColor = '#8ec738'
        button08.style.backgroundColor = '#8ec738'
        button09.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button01.value == button04.value && button01.value == button07.value && button01.value !== '') {
        verificarVencedor()
        button01.style.backgroundColor = '#8ec738'
        button04.style.backgroundColor = '#8ec738'
        button07.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button02.value == button05.value && button02.value == button08.value && button02.value !== '') {
        verificarVencedor()
        button02.style.backgroundColor = '#8ec738'
        button05.style.backgroundColor = '#8ec738'
        button08.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button03.value == button06.value && button03.value == button09.value && button03.value !== '') {
        verificarVencedor()
        button03.style.backgroundColor = '#8ec738'
        button06.style.backgroundColor = '#8ec738'
        button09.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button01.value == button05.value && button01.value == button09.value && button01.value !== '') {
        verificarVencedor()
        button01.style.backgroundColor = '#8ec738'
        button05.style.backgroundColor = '#8ec738'
        button09.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button03.value == button05.value && button03.value == button07.value && button03.value !== '') {
        verificarVencedor()
        button03.style.backgroundColor = '#8ec738'
        button05.style.backgroundColor = '#8ec738'
        button07.style.backgroundColor = '#8ec738'
        turn.innerText = ''
    } else if (button01.value &&
        button02.value && 
        button03.value && 
        button04.value && 
        button05.value && 
        button06.value && 
        button07.value && 
        button08.value &&
        button09.value !== '' && 
        winner.innerText !== 'Você ganhou: ' + player2 &&
        winner.innerText !== 'Você ganhou: ' + player1) {
        winner.innerText = 'DEU VELHA!'
        winner.style.color = '#F64348'
        turn.innerText = ''
        buttonsPlay.forEach((button) => {
            button.disabled = true
        })
    }
  });
});

function verificarVencedor() {
    if (turnAtual % 2 !== 0) {
        winner.style.color = '#8ec738'
        winner.innerText = player2.toUpperCase() + ' VENCEU!'
    } else {
        winner.style.color = '#8ec738'
        winner.innerText = player1.toUpperCase() + ' VENCEU!'
    }
    buttonsPlay.forEach((button) => {
        button.disabled = true
    })
}


// Reiniciar o game
restart.addEventListener("click", function () {
  buttonsPlay.forEach((button) => {
    button.innerText = " ";
    button.value = '';
    button.disabled = false;
    button.style.backgroundColor = ''
    winner.style.color = 'var(--color)'
  });
  turnAtual = 1;
  turn.innerHTML = `É sua vez: ` + player1;
  winner.innerText = ''
});
