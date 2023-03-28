const randomNumber = Math.round(Math.random() * 10)
const screnOne = document.querySelector(".screnOne")
const screnTwo = document.querySelector(".screnTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetclick)



// Função callback
function handleTryClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screnTwo.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  
    inputNumber.value = ""
  xAttempts++
  
}

function handleResetclick() {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen() {
  screnOne.classList.toggle("hide")
  screnTwo.classList.toggle("hide")
}




