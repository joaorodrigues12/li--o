var celsius = 20;

function convertercelsiusparaf(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

var fahrenheit = convertercelsiusparaf(celsius);

console.log(
  celsius + " graus celsius equivalem a " + fahrenheit + " graus fahrenheit"
);
