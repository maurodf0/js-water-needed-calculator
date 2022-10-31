function acquabere(){
var peso = parseInt(document.getElementById('peso').value)
var calorie = parseInt(document.getElementById('calorie').value)
const constante = 25
const constantecalorie = 0.001
var result0 = +peso/constante
console.log(result0)
var result2 = constantecalorie * calorie
console.log(result2)
var finalresult = +result0+result2
var h2 = document.getElementById('result1');
h2.innerHTML = finalresult.toFixed(2) + " Litri";
}
