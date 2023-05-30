const numero = 3;
const resultado = verificarprimo(numero);
console.log(`O número ${numero} é primo? ${resultado}`);
function verificarprimo(valor) {
  if (valor <= 1) {
    return false;
  }
  for (let a = 2; a <= Math.sqrt(valor); a++) {
    if (valor % a === 0) {
      return false;
    }
  }
  return true;
}
