let clicOperator = "";
let dot = false;

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
    numbers = "";
    number1 = "";
    number2 = "";
    clicOperator = "";
}

//Search element in tree of HTML
let numbersAll = document.querySelectorAll("#num");
numbersAll.forEach(num => {
    num.addEventListener('click', () => {
        numbers = numbers + num.textContent.toString();
        panel.value = numbers;
    });
}); 

//Search element in tree of HTML
let operatorsAll = document.querySelectorAll("#operator");
operatorsAll.forEach(operator => {
    operator.addEventListener('click', () => {
        clicOperator = operator.textContent.toString();
        number1 = numbers;
        clearNumbers();
    });
});

//Event click dot
let clicDot = document.querySelector("#dot");
clicDot.addEventListener('click',  () => {
    numbers = numbers + ".";
    panel.value = numbers;
    dot = true;
});

//Event click equal
const clicEqual = document.querySelector("#equal");
clicEqual.addEventListener('click', () => {
    number2 = numbers;
    result();
});

//Event click reset
const clicReset = document.querySelector("#ac");
clicReset.addEventListener('click', () => {
    reset();
});

//operation designated
function result(){
    switch (clicOperator){
        case "*":
            dot == false ? r = parseInt(number1) * parseInt(number2) : r = parseFloat(number1) * parseFloat(number2);
        break; 

        case "/":
            dot == false ? r = parseInt(number1) / parseInt(number2): r = parseFloat(number1) / parseFloat(number2);
        break; 

        case "+":
            dot == false ? r = parseInt(number1) + parseInt(number2) : r = parseFloat(number1) + parseFloat(number2);
        break;
        
        case "-":
            dot == false ? r = parseInt(number1) - parseInt(number2) : r = parseFloat(number1) - parseFloat(number2);
        break; 
    } 
    reset();
    panel.value = r;
}


