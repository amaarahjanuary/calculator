let sum = "";

function addToSum(operator) {
  sum = sum + operator;
  document.getElementById("output").innerText = sum;
}

function evaluateSum() {
  document.getElementById("output").innerText = eval(sum);
}

function clearSum() {
  sum = "";
  document.getElementById("output").innerText = sum;
}

function backspace() {
  sum = sum.slice(0, -1);
  document.getElementById("output").innerText = sum;
}
// function addBy() {
//   num1 = document.getElementById("firstNumber").value;
//   num2 = document.getElementById("secondNumber").value;
//   document.getElementById("result").innerHTML = Number(num1) + Number(num2);
//   gp;
// }