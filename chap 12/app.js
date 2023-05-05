function question1() {
    var input = document.getElementById("q1IN").value, type;
    if (typeof (+input) === "number" && !(isNaN(+input))) {
        type = "Number";
    } else {
        var ASCII = input.charCodeAt()
        if (ASCII > 64 && ASCII < 91) {
            type = "Uppercase letter";
        } else if (ASCII > 96 && ASCII < 123) {
            type = "Lowercase letter";
        } else {
            type = "Not a Letter or Number";
        }
    }
    document.getElementById("q1OP").innerHTML = type;
}
function question2() {
    var input1 = +document.getElementById("q2IN1").value, input2 = +document.getElementById("q2IN2").value, text;
    if (input1 > input2) {
        text = `Number ${input1} is larger`
    } else if (input2 > input1) {
        text = `Number ${input2} is larger`
    } else if (input1 === input2) {
        text = "Both numbers are equal"
    }
    document.getElementById("q2OP").innerHTML = text;
}
function question3() {
    var input = +document.getElementById("q3IN").value, text;
    if (input > 0) {
        text = `Number is positive`
    } else if (0 > input) {
        text = `Number is negative`
    } else {
        text = "Its a Zero"
    }
    document.getElementById("q3OP").innerHTML = text;
}
function question4() {
    var btn = document.querySelector("#q4btn");
    btn.classList.add("disabled");
    var input = document.getElementById("q4IN").value.toLowerCase(), vowel = ["a", "e", "i", "o", "u"], found;
    if (vowel.includes(input)) {
        found = true
    } else {
        found = false
    }
    document.getElementById("q4OP").innerHTML = found;
    setTimeout(() => {
        document.getElementById("q4OP").innerHTML = "Returns true if it is a vowel"
        btn.classList.remove("disabled")
    }, 2000);
}
function question5() {
    var btn = document.querySelector("#q5btn");
    btn.classList.add("disabled");
    var correctPassword = document.getElementById("q5IN1").value;
    var userPassword = document.getElementById("q5IN2").value;
    if (userPassword === "" || correctPassword === "") {
        document.getElementById("q5OP").innerHTML = "Please enter your password";
    } else if (userPassword === correctPassword) {
        document.getElementById("q5OP").innerHTML = "Correct! The password you entered matches the original password.";
    } else {
        document.getElementById("q5OP").innerHTML = "Incorrect password.";
    }
    setTimeout(() => {
        document.getElementById("q5OP").innerHTML = "Password Validator"
        btn.classList.remove("disabled")
    }, 3000);
}

function question7() {
    var time = document.getElementById("q7IN").value
    let hour = parseInt(time.substring(0, 2));
    let minute = time.substring(2);
    let meridian;

    if (hour === 0) {
        hour = 12;
        meridian = "AM";
    } else if (hour < 12) {
        meridian = "AM";
    } else if (hour === 12) {
        meridian = "PM";
    } else {
        hour = hour - 12;
        meridian = "PM";
    }
    var formattedTime = `${hour}:${minute} ${meridian}`;
    document.getElementById("q7OP").innerHTML = `The time in 12-hour clock format is: ${formattedTime}`
}