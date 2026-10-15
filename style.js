function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers.");
        return;
    }

    document.getElementById("sum").innerHTML = num1 + num2;
    document.getElementById("difference").innerHTML = num1 - num2;
    document.getElementById("product").innerHTML = num1 * num2;

    if (num2 == 0) {
        document.getElementById("quotient").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("quotient").innerHTML = num1 / num2;
    }
}

function clearEntries() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
}