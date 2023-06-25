// script.js

function convertToFar() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");
    
    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = (celsiusValue * 9/5) + 32;
    
    if (!isNaN(fahrenheitValue)) {
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  }
  
  function convertToCel() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");
    
    let fahrenheitValue = parseFloat(fahrenheitInput.value);
    let celsiusValue = (fahrenheitValue - 32) * 5/9;
    
    if (!isNaN(celsiusValue)) {
      celsiusInput.value = celsiusValue.toFixed(2);
    }
  }
  