// Celcius to Farenheit

function celciusToFarenheit(celcius){
  var result = (celcius * 9 / 5) + 32;
  console.log(result);
  return result;
}

var output = celciusToFarenheit(150);
var convertToFixed = output.toFixed(2);