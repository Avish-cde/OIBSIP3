//js function
function convertToFahrenheit() {
	var celsius = document.getElementById("cel").value;
	var fahrenheit = (celsius * 1.8) + 32;
	document.getElementById("fahr").value = fahrenheit;
}

function convertToCelsius() {
	var fahrenheit = document.getElementById("fahr").value;
	var celsius = (fahrenheit - 32) / 1.8;
	document.getElementById("cel").value = celsius;
}