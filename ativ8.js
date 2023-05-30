var numero1 = 10;
var numero2 = 5;
var numero3 = 7;

function encontraromaioremenor(numero1, numero2, numero3) {
  var maior = Math.max(numero1, numero2, numero3);
  var menor = Math.min(numero1, numero2, numero3);
  return { maior: maior, menor: menor };
}

var resultado = encontraromaioremenor(numero1, numero2, numero3);

console.log("O maior número é: " + resultado.maior);
console.log("O menor número é: " + resultado.menor);
