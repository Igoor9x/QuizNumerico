// Caixas de cada sessão
const startBox = document.querySelector(".start");
const rulestBox = document.querySelector(".rules");
const mainBox = document.querySelector(".main");
const victorybox = document.querySelector(".victory");

// Botões do quiz
const btnStartQuiz = document.querySelector(".btnStart");
const btnRulesQuiz = document.querySelector(".btnRules");
const btnRestart = document.querySelector(".btnRestart");
const btnRestartTentativas = document.querySelector(".btnRestartTentativas");

//input numerico e botãp de tentativa
const btnTryAgain = document.querySelector(".tentativa");

//Atualizar vida e dar dicas
const lifeMessage = document.querySelector(".lifers");
const dicaMessage = document.querySelector(".dica");


const numberRandom = Math.floor(Math.random()* 2 +1);
let tentavivas = 10;


//Eventos para o botão de start e rules
btnStartQuiz.addEventListener("click", () => {
    startBox.style.display="none";
    btnRestartTentativas.style.display="none";
    rulestBox.style.display="flex";
});
btnRulesQuiz.addEventListener("click", () => {
    rulestBox.style.display="none";
    mainBox.style.display="flex";
});
btnRestartTentativas.addEventListener("click", () => {
    window.location.reload();
});
btnRestart.addEventListener("click", () => {
    window.location.reload();
});


btnTryAgain.addEventListener("click", (e) => {
    e.preventDefault()
    const inputQuiz = parseInt(document.querySelector(".gaming").value);
    
    if(tentavivas > 0){
        if(inputQuiz === numberRandom)
        {
            mainBox.style.display="none";
            victorybox.style.display="flex";
        }else{
            tentavivas--;
            lifeMessage.innerHTML= "Tentativas restantes: " + tentavivas;
            if (inputQuiz < numberRandom) {
                return dicaMessage.innerHTML= "O número correto é maior.";
            } else {
                return dicaMessage.innerHTML= "O número correto é menor.";
            }
        }
    } else{
            btnTryAgain.style.display="none";
             btnRestartTentativas.style.display="block";
             return dicaMessage.innerHTML= "O número correto é " + numberRandom;
        }
    });

  

