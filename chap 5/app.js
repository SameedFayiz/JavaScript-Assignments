function question4() {
    var ticketPrice = 600;
    var numberOfTickets = 5;
    var totalCost = ticketPrice * numberOfTickets;
    document.write("The cost of buying " + numberOfTickets + " movie tickets is " + totalCost + " PKR");
}
function question5() {
    var num = 5;
    document.write("Multiplication table of " + num + "<br>");
    for (var i = 1; i <= 10; i++) {
        document.write(num + " x " + i + " = " + num * i + "<br>");
    }
}
function question6() {
    // Celsius to Fahrenheit conversion
    var celsiusTemp = 30;
    var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
    document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F <br>");

    // Fahrenheit to Celsius conversion
    var fahrenheitTemp = 86;
    var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
    document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");
}
function question7() {
    var item1Price = 2000;
    var item2Price = 3500;
    var item1Qty = 3;
    var item2Qty = 2;
    var shippingCharges = 500;

    // calculations
    var totalItem1Cost = item1Price * item1Qty;
    var totalItem2Cost = item2Price * item2Qty;
    var totalCostBeforeShipping = totalItem1Cost + totalItem2Cost;
    var totalCostAfterShipping = totalCostBeforeShipping + shippingCharges;

    // receipt output
    document.write(">Shopping Cart Checkout<");
    document.write("Order Receipt");
    document.write("Price of Item 1: " + item1Price + " PKR<br>");
    document.write("Quantity of Item 1: " + item1Qty + "<br>");
    document.write("Total cost of Item 1: " + totalItem1Cost + " PKR<br><br>");

    document.write("Price of Item 2: " + item2Price + " PKR<br>");
    document.write("Quantity of Item 2: " + item2Qty + "<br>");
    document.write("Total cost of Item 2: " + totalItem2Cost + " PKR<br><br>");

    document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");

    document.write("Total Cost Before Shipping: " + totalCostBeforeShipping + " PKR<br>");
    document.write("Total Cost After Shipping: " + totalCostAfterShipping + " PKR");
}
function question8() {
    var totalMarks = 500;
    var obtainedMarks = 390;

    // calculations
    var percentage = (obtainedMarks / totalMarks) * 100;

    // output
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%");
}
function question9() {
    var usd = 10;
    var sar = 25;

    // calculations
    var pkr = (usd * 104.80) + (sar * 28);

    // output
    document.write("Total Currency in PKR: " + pkr.toFixed(2));
}
function question11() {
    var currentYear = 2023;
    var birthYear = 1995;

    // calculations
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;

    // output
    document.write("They are either " + age1 + " or " + age2 + " years old.");
}
function question12() {
    var radius = 5;
    var pi = 3.142;

    // calculations
    var circumference = 2 * pi * radius;
    var area = pi * (radius ** 2);

    // output
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
    document.write("The area is " + area.toFixed(2));
}
function question13() {
    var favoriteSnack = "chocolate chip cookies";
    var currentAge = 25;
    var maximumAge = 80;
    var estimatedAmountPerDay = 2;

    // calculations
    var yearsRemaining = maximumAge - currentAge;
    var daysRemaining = yearsRemaining * 365;
    var totalAmount = daysRemaining * estimatedAmountPerDay;

    // output
    document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);
}

function question14() {
    sub1 = parseInt(document.getElementById("tRowIn1").value);
    sub2 = parseInt(document.getElementById("tRowIn2").value);
    sub3 = parseInt(document.getElementById("tRowIn3").value);

    document.getElementById("tRowT1").innerHTML = sub1 + sub2 + sub3;
    document.getElementById("tRowOp1").innerHTML = sub1 + "%";
    document.getElementById("tRowOp2").innerHTML = sub2 + "%";
    document.getElementById("tRowOp3").innerHTML = sub3 + "%";
    document.getElementById("tRowT2").innerHTML = (sub1 + sub2 + sub3) / 3 + '%';
}