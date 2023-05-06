function question1() {
    var num = +document.getElementById("q1IN").value
    var rounded, floor_, ceil_;
    rounded = Math.round(num);
    floor_ = Math.floor(num);
    ceil_ = Math.ceil(num);
    document.getElementById("q1OP1").innerHTML = "Number: " + num
    document.getElementById("q1OP2").innerHTML = "Rounded value: " + rounded
    document.getElementById("q1OP3").innerHTML = "Floored value: " + floor_
    document.getElementById("q1OP4").innerHTML = "Ceiled value: " + ceil_
}

function question2() {
    var num = +document.getElementById("q2IN").value
    if (num >= 0) {
        document.getElementById("q2msg").innerHTML = "Please enter a negative number!"
        setInterval(() => {
            document.getElementById("q2msg").innerHTML = ""
            return
        }, 3000);
    } else {
        var rounded, floor_, ceil_;
        rounded = Math.round(num);
        floor_ = Math.floor(num);
        ceil_ = Math.ceil(num);
        document.getElementById("q2OP1").innerHTML = "Number: " + num
        document.getElementById("q2OP2").innerHTML = "Rounded value: " + rounded
        document.getElementById("q2OP3").innerHTML = "Floored value: " + floor_
        document.getElementById("q2OP4").innerHTML = "Ceiled value: " + ceil_
    }
}

function question3() {
    var num = +document.getElementById("q3IN").value;
    var num_ = Math.abs(num);
    document.getElementById("q3OP").innerHTML = `Absolute value of ${num} is ${num_}`
    var btn = document.querySelector("#q3btn")
    btn.classList.add("disabled")
    setTimeout(() => {
        document.getElementById("q3OP").innerHTML = "Absolute Value Generator"
        btn.classList.remove("disabled")
    }, 3000);
}

function question4() {
    var dice = Math.floor(Math.random() * 6 + 1);
    document.getElementById("q4OP").innerHTML = dice;
    return dice
}

// Dice Roll
//select the classes we require
var cube = document.querySelector('.cube');
var currentClass = '';

//our main roll dice function on click
function rollDice() {
    var rollBtn = document.querySelector('.rollBtn');
    rollBtn.classList.add("disabled")
    var randNum = question4()
    //generate a class with the random number between 1 - 6 called showClass
    var showClass = 'show-' + randNum;
    // if there is a class already selected remove it
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    // add the new showclass with the generated number
    cube.classList.add(showClass);
    //set the current class to the randomly generated number
    currentClass = showClass;
    setTimeout(() => {
        rollBtn.classList.remove("disabled")
    }, 1500);
}

// Coin flip Question 5

jQuery(document).ready(function ($) {

    $('#coin').on('click', function () {
        var flipResult = Math.random();
        $('#coin').removeClass();
        setTimeout(function () {
            if (flipResult <= 0.5) {
                $('#coin').addClass('heads');
                document.getElementById("q5OP").innerHTML = 'It is head';
            }
            else {
                $('#coin').addClass('tails');
                document.getElementById("q5OP").innerHTML = 'It is tails';
            }
        }, 100);
    });
});

function question6() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("q6OP").innerHTML = `Random number: ${randomNumber}`;
}

function question7() {
    var weightInput = document.getElementById("q7IN").value.toLowerCase();
    let weight = parseFloat(weightInput);
    if (weightInput.includes("kg") || weightInput.includes("kilogram") || (typeof (+weightInput) === "number" && !isNaN(+weightInput))) {
        document.getElementById("q7OP").innerHTML = `Your weight is: ${weight.toFixed(2)} kgs`;
    } else {
        document.getElementById("q7OP").innerHTML = "Please enter correct weight"
    }
}

function question8() {
    var btn = document.querySelector("#q8btn")
    btn.classList.add("disabled")
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var guess = +document.getElementById("q8IN").value;
    if (0 > guess || guess > 10) {
        document.getElementById("q8OP").innerHTML = "Please guess a number between 1 and 10";
    } else if (guess === secretNumber) {
        document.getElementById("q8OP").innerHTML = "Congratulations, you guessed the secret number!";
    } else {
        document.getElementById("q8OP").innerHTML = `Sorry, the secret number was ${secretNumber}. Please try again.`;
    }
    setTimeout(() => {
        document.getElementById("q8OP").innerHTML = ""
        btn.classList.remove("disabled")
    }, 2000);
}