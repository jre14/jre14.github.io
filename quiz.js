const arrayQuestionGeneralCulture = [["¿Cuál es el río más largo del mundo?", "El Amazonas", "El río de tu casa", "El Nilo", "El Misisipi", "El Yeniséi", "El Amazonas"], 
                                    ["¿Qué tipo de animal es la ballena?", "Un pez", "Un mamífero", "Un anfibio", "Un reptil", "Un ave", "Un mamífero"],
                                    ["¿Cuál es el océano más grande del mundo?", "El océano Atlantico", "El océano Índico", "El océano Pacífico", "El océano Ártico", "El océano Antártico", "El océano Pacífico"],
                                    ["¿Cuánto duró la guerra de los 100 años?", "Duró 100 años", "Duró 107 años", "Duró 105 años", "Duró 116 años", "Duró 117 años", "Duró 116 años"],
                                    ["¿Cuántos días tiene un año bisiesto?", "365 días", "364 días", "367 días", "363 días","366 días", "366 días"]];

const arrayQuestionFutbol = [["¿Cuánto dura un partido de futbol", "45 minutos", "90 minutos", "80 minutos", "100 minutos", "60 minutos", "90 minutos"],
                            ["¿Qué selección gano la primera Copa del Mundo(1930)?","Estados Unidos", "Argentina", "Uruguay", "México", "Brasil", "Uruguay"],
                            ["¿Qué jugador marcó el hat-trick mas rapido en LaLiga?","Messi","Diego Maradona","Pelé","Ronaldinho","Bebeto","Bebeto"],
                            ["¿En que temporada las victorias empezaron a valer 3 puntos?", "1995/96", "1993/94", "1989/90", "1997/98", "1991/92", "1995/96"],
                            ["¿A partir de que temporada se implantó el VAR?", "2000/01", "2014/15", "2018/19", "2008/09", "2012/13", "2018/19"]];

const arrayPeople = [["Rodrigo", 19],[ "Pepe",10],["Rafa",12],["Tanque", 17]];

let newArray = [];
function pushArray(){
    arrayPeople.push([nameUser, score]);
    pushNewArray();
}

function pushNewArray(){
    const countPeople = arrayPeople.length;
    let stopl = 0;
    let n=20;
    for(l=n; l > 0; l--){
        for(y=0; y < countPeople; y++){  
            for(x=0; x<2; x++){
                if(l == arrayPeople[y][1]){               
                    if(arrayPeople[y][1] == arrayPeople[y][x]){
                        stopl = 20 - arrayPeople[y][x];
                        n = n - stopl;
                        newArray.push([arrayPeople[y][0],arrayPeople[y][1]]);
                    }
                } 
            }
        }
    }
}    

let arrayQuestion = "";
let btnOption1 = "";
let btnOption2 = "";
let btnOption3 = "";
let btnOption4 = "";
let btnOption5 = "";

let saveOption = "";

function correctAnswer(){
    if(saveOption == arrayQuestion[i][6]){
        message.textContent = "Correcto";
            bgGreenMessage(message);
            scorePlayer(); 
    } else {
        message.textContent = "Incorrecto";
            bgRedMessage(message);
    }
}

let array = "";
let countArray = ""
let category = ""

function countOption() {
    switch (array){
        case arrayQuestionGeneralCulture:
            countArray = (arrayQuestionGeneralCulture.length-1);
            arrayQuestion = arrayQuestionGeneralCulture;
            category = "Cultura General";
            nQuestion();
            nOption();
        break;

        case arrayQuestionFutbol:
            countArray = (arrayQuestionFutbol.length-1);
            arrayQuestion = arrayQuestionFutbol;
            category = "Futbol";
            nQuestion();
            nOption();
        break;

    }
}
const divForm = document.getElementById("form");
const divCategory = document.getElementById("category");
const divQGC = document.getElementById("qGC");
const btnNext = document.getElementById("next");
const btnResults = document.getElementById("btnresults");
const divResults = document.getElementById("results");

divCategory.style.display = "none";
divQGC.style.display = "none";
btnNext.style.display = "none";
btnResults.style.display = "none";
divResults.style.display = "none";

const welcome = document.getElementById("welcome");
const generalCulture = document.getElementById("generalCulture");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const option5 = document.getElementById("option5");
const question = document.getElementById("question");

const message = document.getElementById("message");
const start = document.getElementById("start");

function user(datoUser) {
    nameUser = datoUser;
}

function bgRedMessage(message){
    message.style.background = "red";
}

function bgGreenMessage(message){
    message.style.background = "green";
}

let score = 0;
function scorePlayer() {
    score++;
}

let i = 0;
function increment() {
    if(i < countArray) {
        i++;
        nQuestion();
        nOption();
    } else {
        results();
    }   
}

function results() {
    btnResults.style.display = "block";
    welcome.textContent = `${nameUser} ¡Felicidades has concluido ${category}!`;
    question.textContent = "";
    btnNext.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    //console.log("se acabo");
}

function displayBtnNext() {
    btnNext.style.display = "block";
} 

function disabledBtnOption() {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    option5.disabled = true;
}

function nQuestion() {
    question.textContent = arrayQuestion[i][0];
}

function nOption(){
    btnOption1 = arrayQuestion[i][1];
    btnOption2 = arrayQuestion[i][2];
    btnOption3 = arrayQuestion[i][3];
    btnOption4 = arrayQuestion[i][4];
    btnOption5 = arrayQuestion[i][5];

    option1.textContent = arrayQuestion[i][1];
    option2.textContent = arrayQuestion[i][2];
    option3.textContent = arrayQuestion[i][3];
    option4.textContent = arrayQuestion[i][4];
    option5.textContent = arrayQuestion[i][5];
}

btnResults.onclick = () => {
    divResults.style.display = "block";
    btnResults.style.display = "none";
    let tRanking = document.getElementById('tRanking');
    let body = document.createElement('tbody');
    pushArray();
    pushNewArray();
    let countNewArray = arrayPeople.length;
    let k=1;
    for(y=0; y < countNewArray; y++){  
        let tr = document.createElement("tr");
        let td = document.createElement('td');
        td.innerText = k;
        tr.appendChild(td);
        for(x=0; x<2; x++){
            td = document.createElement('td');              
            if(newArray[y][1] == newArray[y][x]){
                td.innerText = newArray[y][x];
            } else {  td.innerText = newArray[y][x];}
            tr.appendChild(td);
            
        } k++; 
        body.appendChild(tr);   
    } tRanking.appendChild(body);
}

start.onclick = () => {
    let datoUser = document.getElementById("name").value;
    if(datoUser == ""){
        alert("No has puesto un nombre o apodo :(");
    } else {
        divForm.style.display = "none";
        divCategory.style.display = "block";
        user(datoUser);
        welcome.textContent = `Bienvenido ${nameUser}, comenzemos eligiendo una categoria`;
    }
}

generalCulture.onclick = () => {
    divCategory.style.display = "none";
    divQGC.style.display = "block";
    array = arrayQuestionGeneralCulture;
    countOption(array);
    welcome.textContent = `${nameUser} has elegido: Cultura General`;  
    nQuestion();
    nOption();
    
    option1.onclick = () => {
        saveOption = btnOption1;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }

    option2.onclick = () => {
        saveOption = btnOption2;
        correctAnswer(saveOption);  
        disabledBtnOption();
        displayBtnNext();
    }

    option3.onclick = () => {
        saveOption = btnOption3;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }

    option4.onclick = () => {
        saveOption = btnOption4;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }

    option5.onclick = () => {
        saveOption = btnOption5;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }   
} 

futbol.onclick = () => {
    divCategory.style.display = "none";
    divQGC.style.display = "block";
    array = arrayQuestionFutbol;
    countOption(array);
    welcome.textContent = `${nameUser} has elegido: Futbol`;  
    nQuestion();
    nOption();
    
    option1.onclick = () => {
        saveOption = btnOption1;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }

    option2.onclick = () => {
        saveOption = btnOption2;
        correctAnswer(saveOption);  
        disabledBtnOption();
        displayBtnNext();
    }

    option3.onclick = () => {
        saveOption = btnOption3;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }

    option4.onclick = () => {
        saveOption = btnOption4;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }

    option5.onclick = () => {
        saveOption = btnOption5;
        correctAnswer(saveOption);
        disabledBtnOption();
        displayBtnNext();
    }   
} 

btnNext.onclick = () => {
    increment();
    btnNext.style.display = "none";
    message.textContent = "";
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;
    option5.disabled = false;
} 