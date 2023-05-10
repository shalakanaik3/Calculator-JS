let firstNumber = document.getElementById("fnum");
let secondNumber = document.getElementById("snum");
let result = document.getElementById("spanEle");
let resetEle = document.getElementById("reset")

function add(){
  let num1= firstNumber.valueAsNumber
  let num2= secondNumber.valueAsNumber
  let res = num1 + num2
  result.textContent = res

}
function sub(){
  let num1= firstNumber.valueAsNumber
  let num2= secondNumber.valueAsNumber
  let res = num1 - num2
  result.textContent = res
}
function mul(){
  let num1= firstNumber.valueAsNumber
  let num2= secondNumber.valueAsNumber
  let res = num1 * num2
  result.textContent = res
}
function div(){
  let num1= firstNumber.valueAsNumber
  let num2= secondNumber.valueAsNumber
  let res = num1 / num2
  result.textContent = res
}

function reset(){
  firstNumber.value= ""
  secondNumber.value = ""
  result.textContent = ""
}
