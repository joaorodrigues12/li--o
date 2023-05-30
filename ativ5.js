const idade = 13;
const categoria = determinarcategoria(idade);
console.log(`O nadador  de ${idade} anos está na categoria ${categoria}`);
function determinarcategoria(idade) {
  if (idade >= 5 && idade <= 7) {
    return "infantil A";
  } else if (idade >= 8 && idade <= 10) {
    return "infantil B";
  } else if (idade >= 11 && idade <= 13) {
    return "juvenil A";
  } else if (idade >= 14 && idade <= 17) {
    return "juvenil B";
  } else {
    return "adulto";
  }
}
