let firstNumberInput = document.getElementById("firstNumber");
let secondNumberInput = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let randomNumber1 = Math.ceil(Math.random() * 100);
let randomNumber2 = Math.ceil(Math.random() * 100);

firstNumberInput.textContent = randomNumber1;
secondNumberInput.textContent = randomNumber2;

function checkBtn() {
    const inputNumber1 = parseInt(firstNumberInput.textContent);
    const inputNumber2 = parseInt(secondNumberInput.textContent);
    const result = parseInt(userInputElement.value);
    const successMsg = "Congratulations! you are right"
    const errorMsg = "please try again"
    if(result === inputNumber1 + inputNumber2) {
        gameResultElement.textContent = successMsg;
        gameResultElement.style.backgroundColor = '#028a0f';
    }
    else {
        gameResultElement.textContent = errorMsg;
        gameResultElement.style.backgroundColor = '#1e217c';
    }
}

function restartBtn() {
    gameResultElement.textContent = "";
    userInputElement.value = "";
    let randomNumber1 = Math.ceil(Math.random() * 100);
    let randomNumber2 = Math.ceil(Math.random() * 100);
    firstNumberInput.textContent = randomNumber1;
    secondNumberInput.textContent = randomNumber2;
}