function calculate() {
    var gender = document.getElementById('gender').value;
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var resultElement = document.getElementById('result');
    var bmi = weight / ((height / 100) * (height / 100));
    document.getElementById("only").value=bmi;

    if (!isNaN(bmi)) {
        var category;
        if (gender === 'male') {
            category = getBMICategoryMen(bmi);
        } else if (gender === 'female') {
            category = getBMICategoryWomen(bmi);
        }
        resultElement.value = 'Your BMI: ' + bmi.toFixed(2) + ', ' + category;
    } else {
        resultElement.value = 'Please enter valid height and weight.';
    }
}

function getBMICategoryMen(bmi) {
    if (bmi < 18) {
        return 'Underweight';}
    else if (bmi >= 18 && bmi < 25) {
        return 'Normal weight';}
    else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';}
    else {
        return 'Obese';}}

function getBMICategoryWomen(bmi) {
    if (bmi < 18) {
        return 'Underweight';}
    else if (bmi >= 18 && bmi < 25) {
        return 'Normal weight';}
    else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';}
    else {
        return 'Obese';}
}
function changeColor() {
    var value = parseFloat(document.getElementById("only").value);
    var outputText = document.getElementById("result");
    if (value <= 18) {
        outputText.style.color = "#01a5a9";}
    else if (value > 18 && value < 25) {
        outputText.style.color = "green";}
    else if (value >= 25 && value <= 30) {
        outputText.style.color = "orange";}
    else if (value > 35) {
        outputText.style.color = "red";}}
function changeImage() {
    var value = parseInt(document.getElementById("only").value);
    var image = document.getElementById("img");

    if (value <= 18) {
        image.src = "image1.png";
    } else if (value >18 && value < 25) {
        image.src = "image2.png";
    } else if (value >=25 && value<=30 ) {
        image.src = "image3.png";
    } else if (value>35){
        image.src = "image4.png"; // Default image if value is between 18 and 25
    }
}