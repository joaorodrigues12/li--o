const anos = 1;
const meses = 2;
const dias = 3;
const emdias = calcularidadeemdias(anos, meses, dias);
console.log(`a idade é de ${emdias}dias.`);
function calcularidadeemdias(anos, meses, dias) {
  const diasano = 365;
  const diasdomes = 30;

  const emdias = anos * diasano + meses * diasdomes + dias;
  return emdias;
}
