
  function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height/100 * height/100);
    var output = document.getElementById("output");
    output.style.color = "black";
    output.style.fontSize = "50px";
    output.style.fontFamily = "Arial, sans-serif";
    output.innerHTML = "Your BMI is " + bmi.toFixed(2);
  }
