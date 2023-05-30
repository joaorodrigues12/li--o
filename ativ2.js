const notas = [3, 3, 2];
const letra = "P";
let media;
if (letra === "A") {
  const soma = notas.reduce((nota1, nota2) => nota1 + nota2, 0);
  media = soma / notas.length;
} else if (letra === "P") {
  media = (notas[0] * 5 + notas[1] * 3 + notas[2] * 2) / 10;
} else if (letra === "H") {
  const somaInversos = notas.reduce((nota1, nota2) => nota1 + 1 / nota2, 0);
  media = notas.length / somaInversos;
} else {
  media = "Letra inválida. Escolha A,P ou H";
}
console.log("Média calculada:", media);
