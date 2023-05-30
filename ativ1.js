const segundos = 10000;
const horas = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);
const segundosrestantes = segundos % 60;
const tempoformatado = (`Tempo: ${horas}h ${minutos}min ${segundosrestantes}s`);
console.log(tempoformatado)