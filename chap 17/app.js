function question3() {
    var btn = document.querySelector("#q3btn")
    btn.classList.add("disabled")
    for (let i = 1; i < 11; i++) {
        document.getElementById("q3OP").innerHTML += `${i}<br>`
    }
    setTimeout(() => {
        document.getElementById("q3OP").innerHTML = ""
        btn.classList.remove("disabled")
    }, 3000);
}

function question4() {
    var number = parseInt(document.getElementById("q4IN1").value);
    var length = parseInt(document.getElementById("q4IN2").value);
    if (isNaN(number) || isNaN(length)) {
        document.getElementById("q4warn").innerHTML = "Please enter integers in both fields*"
        setTimeout(() => {
            document.getElementById("q4warn").innerHTML = ""
        }, 3000);
        return
    }
    var btn = document.querySelector("#q4btn")
    btn.classList.add("disabled")
    document.getElementById("q4OP").innerHTML += `Multiplication table of ${number} with length ${length}:<br>`;
    for (let i = 1; i <= length; i++) {
        document.getElementById("q4OP").innerHTML += `${number} x ${i} = ${number * i}<br>`;
    }
    setTimeout(() => {
        document.getElementById("q4OP").innerHTML = ""
        btn.classList.remove("disabled")
    }, 6000);
}

function question5() {
    const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    document.getElementById("q5OP").innerHTML = ""
    for (let i = 0; i < fruits.length; i++) {
        document.getElementById("q5OP").innerHTML += `${fruits[i]}<br>`
    }
    for (let j = 0; j < fruits.length; j++) {
        document.getElementById("q5OP").innerHTML += `Element at index ${j} is ${fruits[j]}<br>`
    }

}