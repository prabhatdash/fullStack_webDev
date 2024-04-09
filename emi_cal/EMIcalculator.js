function calculateEMI() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);
    var monthlyInterest = (rate / 100) / 12;
    var numPayments = time;
    var emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numPayments)) / (Math.pow(1 + monthlyInterest, numPayments) - 1);
    document.getElementById('result').value = "EMI: " + emi.toFixed(2) + " Rupees";
}