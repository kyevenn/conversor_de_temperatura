function converterTemperatura() {
  var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
  
  if (!isNaN(fahrenheit)) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.body.style.backgroundColor = celsius > 30 ? "orange" : "aqua";
    alert(fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C");
  } else {
    alert("Por favor, digite uma temperatura válida em Fahrenheit.");
  }
}