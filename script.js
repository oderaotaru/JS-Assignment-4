var grab = document.getElementById("grab");

var height = parseFloat(prompt("Input your height (m²)"));
var weight = parseFloat(prompt("Input your weight (kg)"));

function calcBmi(h, w) {
    var calculate = weight / (height * height)
    var bmi = calculate.toFixed(2);

    if (bmi < 18.5){
        output = "Your BMI is "+bmi+", this means you're underweight.";
    } else if (bmi > 18.4 && bmi <= 24.9){
        output = "Your BMI is "+bmi+", your weight is healthy!";
    } else {
        output = "Your BMI is "+bmi+", you might wanna hit the gym."
    }
    return output
}

grab.innerHTML = calcBmi(height, weight);