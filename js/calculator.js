let clicOperator = "";
let dot = 0;

const panel = document.getElementById("panel");
let numbers = panel.value;

//Delete the first number entered
const clearNumbers = () => {
    numbers = "";
    panel.value = "";
}

//Clear all 
const reset = () => {
    panel.value = "";
    numbers = ""
    number1 = 0;
    number2 = 0;
    clicOperator = "";
}

//Event clic number one
let clicOne = document.getElementById("one");
clicOne.onclick = () => {
    numbers = numbers + "1";
    panel.value = numbers;
}

//Event clic number two
let clicTwo = document.getElementById("two");
clicTwo.onclick = () => {
    numbers = numbers + "2";
    panel.value = numbers;
}

//Event clic number three
let clicThree = document.getElementById("three");
clicThree.onclick = () => {
    numbers = numbers + "3";
    panel.value = numbers;
}

//Event clic number four
let clicFour = document.getElementById("four");
clicFour.onclick = () => {
    numbers = numbers + "4";
    panel.value = numbers;
}

//Event clic number five
let clicFive = document.getElementById("five");
clicFive.onclick = () => {
    numbers = numbers + "5";
    panel.value = numbers;
}

//Event clic number six
let clicSix = document.getElementById("six");
clicSix.onclick = () => {
    numbers = numbers + "6";
    panel.value = numbers;
}

//Event clic number seven
let clicSeven = document.getElementById("seven");
clicSeven.onclick = () => {
    numbers = numbers + "7"
    panel.value = numbers;
}

//Event clic number eight
let clicEight = document.getElementById("eight");
clicEight.onclick = () => {
    numbers = numbers + "8";
    panel.value = numbers;
}

//Event clic number nine
let clicNine = document.getElementById("nine");
clicNine.onclick = () => {
    numbers = numbers + "9";
    panel.value = numbers;
}

//Event clic number zero
let clicZero = document.getElementById("zero");
clicZero.onclick = () => {
    numbers = numbers + "0";
    panel.value = numbers;
}

//Event clic number dot
let clicDot = document.getElementById("dot");
clicDot.onclick = () => {
    numbers = numbers + ".";
    panel.value = numbers;
    dot = 1;
}

//Mathematical Operators
const clicMultiplication = document.getElementById("multiplication");
clicMultiplication.onclick = () => {
    clicOperator = "*";
    number1 = numbers;
    clearNumbers();
}

const clicDivision = document.getElementById("division");
clicDivision.onclick = () => {
    clicOperator = "/";
    number1 = numbers;
    clearNumbers();
}

const clicPlus = document.getElementById("plus");
clicPlus.onclick = () => {
    clicOperator = "+";
    number1 = numbers;
    clearNumbers();
}

const clicMinus = document.getElementById("minus");
clicMinus.onclick = () => {
    clicOperator = "-";
    number1 = numbers;
    clearNumbers();
}

const clicEqual = document.getElementById("equal");
clicEqual.onclick = () => {
    number2 = numbers;
    result();
}

const clicReset = document.getElementById("ac");
clicReset.onclick = () => {
    reset();
}

//operation designated
function result(){
    switch (clicOperator){
        case "*":
            if(dot == 0){
                r = parseInt(number1) * parseInt(number2);
            } else {
                r = parseFloat(number1) * parseFloat(number2);
            }
        break; 

        case "/":
            if(dot == 0){
                r = parseInt(number1) / parseInt(number2);
            } else {
                r = parseFloat(number1) / parseFloat(number2);
            }
        break; 

        case "+":
            if(dot == 0){
                r = parseInt(number1) + parseInt(number2);
            } else {
                r = parseFloat(number1) + parseFloat(number2);
            }
        break;
        
        case "-":
            if(dot == 0){
                r = parseInt(number1) - parseInt(number2);
            } else {
                r = parseFloat(number1) - parseFloat(number2);
            }
        break; 

    } 
    reset();
    panel.value = r;
}


