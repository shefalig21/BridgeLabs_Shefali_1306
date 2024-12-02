// Q1. Help user find degF or degC based on their Conversion Selection. Use
// Case Statement and ensure that the inputs are within the Freezing Point (
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9

function convertTemperature(temperature, fromUnit, toUnit) {
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      return (temperature * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      return (temperature - 32) * 5/9;
    } else {
      console.log("Invalid conversion units.");
      return null;
    }
  }
  
  const temperature = parseFloat(prompt("Enter temperature:"));
  const fromUnit = prompt("Enter the unit):");
  const toUnit = prompt("Enter the unit");
  
  const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
  
  if (convertedTemperature !== null) {
    console.log(`${temperature} ${fromUnit} is equal to ${convertedTemperature} ${toUnit}`);
  }