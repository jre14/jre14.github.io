const arrayQuestionGeneralCulture = [["¿Cuál es el río más largo del mundo?", "El Amazonas", "El Mississipi", "El Nilo", "El Misisipi", "El Yeniséi", "El Amazonas"], 
                                    ["¿Qué tipo de animal es la ballena?", "Un pez", "Un mamífero", "Un anfibio", "Un reptil", "Un ave", "Un mamífero"],
                                    ["¿Cuál es el océano más grande del mundo?", "El océano Atlantico", "El océano Índico", "El océano Pacífico", "El océano Ártico", "El océano Antártico", "El océano Pacífico"],
                                    ["¿Cuánto duró la guerra de los 100 años?", "Duró 100 años", "Duró 107 años", "Duró 105 años", "Duró 116 años", "Duró 117 años", "Duró 116 años"],
                                    ["¿Cuántos días tiene un año bisiesto?", "365 días", "364 días", "367 días", "363 días","366 días", "366 días"],
                                    ["¿Cuántos años duro la Primera Guerra Mundial?","3 años", "6 años", "4 años", "7 años", "10 años", "4 años"],
                                    ["¿Cuántos huesos tiene el cuerpo humano?", "203 huesos", "204 huesos", "205 huesos", "206 huesos", "207 huesos", "206 huesos"],
                                    ["¿En que año comenzó la Segunda Guerra Mundial?", "En 1937", "En 1929", "En 1939", "En 1942", "En 1949", "En 1939"],
                                    ["¿Cuál es el símbolo quimico del oro?", "Cu", "Fe", "Hg", "Pb", "Au", "Au"],
                                    ["¿Cuál es el país más grande del mundo?", "China", "Rusia", "Canadá", "Estados Unidos", "Brasil", "Rusia"]];

const arrayQuestionFutbol = [["¿Cuánto dura un partido de futbol?", "45 minutos", "90 minutos", "80 minutos", "100 minutos", "60 minutos", "90 minutos"],
                            ["¿Qué selección gano la primera Copa del Mundo(1930)?","Estados Unidos", "Argentina", "Uruguay", "México", "Brasil", "Uruguay"],
                            ["¿Qué jugador marcó el hat-trick más rapido en La Liga en 1995?","Messi","Diego Maradona","Pelé","Ronaldinho","Bebeto","Bebeto"],
                            ["¿En que temporada las victorias empezaron a valer 3 puntos?", "1995/96", "1993/94", "1989/90", "1997/98", "1991/92", "1995/96"],
                            ["¿A partir de que temporada se implantó el VAR?", "2000/01", "2014/15", "2018/19", "2008/09", "2012/13", "2018/19"],
                            ["¿Quién ganó el mundial de fútbol de 2014?", "Brasil", "Alemania", "Colombia", "Holanda", "Argentina", "Alemania"],
                            ["¿Cuándo ganó Lionel Messi su primer balón de oro?", "En 2007", "En 2009", "En 2010", "En 2011", " En 2012","En 2009"],
                            ["En un partido profesional ¿Cuántos cambios se pueden hacer?","2 cambios", "3 cambios", "5 cambios", "6 cambios", "9 cambios", "3 cambios"],
                            ["¿Cuál es uno de los apodos que le dicen a Cristiano Ronaldo?","El Cebolla", "La Foquita","El Gallo","El Bicho", "La Pulga","El Bicho" ],
                            ["¿Qué año esta considerado como el nacimiento del fútbol moderno?", "En 1860", "En 1785", "En 1863", "En 1913", "En 1910", "En 1863"]];

const arrayPeople = [["Rodrigo", 9, "01:30"],[ "Pepe", 10, "01:45"],["Rafa", 5, "01:54"],["Tanque", 7, "01:25"]];


const   divForm = document.getElementById("form"),
        divCategory = document.getElementById("category"),
        divQGC = document.getElementById("qGC"),
        btnNext = document.getElementById("next"),
        btnResults = document.getElementById("btnresults"),
        divResults = document.getElementById("results"),
        welcome = document.getElementById("welcome"),
        divWelcome = document.getElementById("divWelcome"),
        generalCulture = document.getElementById("generalCulture"),
        option1 = document.getElementById("option1"),
        option2 = document.getElementById("option2"),
        option3 = document.getElementById("option3"),
        option4 = document.getElementById("option4"),
        option5 = document.getElementById("option5"),
        question = document.getElementById("question"),
        message = document.getElementById("message"),
        start = document.getElementById("start");

let arrayQuestion,
    btnOption1,
    btnOption2,
    btnOption3,
    btnOption4,
    btnOption5,
    saveOption,
    array, 
    countArray,
    category,
    usedNum = [],
    position = [],
    newArray = [];

divCategory.style.display = "none";
divQGC.style.display = "none";
btnNext.style.display = "none";
btnResults.style.display = "none";
divResults.style.display = "none";
divWelcome.style.display = "none";

const pushArray = () => {
    arrayPeople.push([nameUser, score, userTime]);
    pushNewArray();
}

const pushNewArray = () => {
    const countPeople = arrayPeople.length;
    let stopl = 0;
    let n=10;
    for(l=n; l >= 0; l--){
        for(y=0; y < countPeople; y++){  
            for(x=0; x<3; x++){
                if(l == arrayPeople[y][1]){               
                    if(arrayPeople[y][1] == arrayPeople[y][x]){
                        stopl = 10 - arrayPeople[y][x];
                        n = n - stopl;
                        newArray.push([arrayPeople[y][0], arrayPeople[y][1], arrayPeople[y][2]]);
                    }
                } 
            }
        }
    }
}    

let correctAnswer = () => {
    if(saveOption == arrayQuestion[j][6]){
        message.textContent = "Correcto";
            bgGreenMessage(message);
            scorePlayer(); 
    } else {
        message.textContent = "Incorrecto";
            bgRedMessage(message);
    }
}

const countOption = () => {
    const countA = array.length;
    while(usedNum.length < countA){
        let randomNum = Math.ceil(Math.random() * countA);
        if(!usedNum.includes(randomNum)){
            usedNum.push(randomNum);
        }
    }
    for(k=0; k < usedNum.length; k++){
        position.push(usedNum[k]-1)
    }

    switch (array){
        case arrayQuestionGeneralCulture:
            countArray = (array.length-1);
            arrayQuestion = array;
            category = "Cultura General";
            nQuestion();
            nOption();
        break;

        case arrayQuestionFutbol:
            countArray = (array.length-1);
            arrayQuestion = array;
            category = "Futbol";
            nQuestion();
            nOption();
        break;
    }
}

const user = (datoUser) => {
    nameUser = datoUser;
    return nameUser;
}

const bgRedMessage = (message) => {
    message.style.background = "red";
}

const bgGreenMessage = (message) => {
    message.style.background = "green";
}

let score = 0;
let scorePlayer = () => {
    score++;
}

let i = 0;
let increment = () => {
    if(i < countArray) {
        i++;
        nQuestion();
        nOption();
    } else {
        results();
    }   
}

const results = () => {
    btnResults.style.display = "block";
    welcome.textContent = `${nameUser} ¡Felicidades has concluido ${category}!`;
    question.textContent = "";
    btnNext.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
}

const displayBtnNext = () => {
    btnNext.style.display = "block";
} 

const disabledBtnOption = () => {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    option5.disabled = true;
}

let nQuestion = () => {
    j = position[i];
    question.textContent = `${i+1}.- ${arrayQuestion[j][0]}`;
}

let nOption = () => {
    btnOption1 = arrayQuestion[j][1];
    btnOption2 = arrayQuestion[j][2];
    btnOption3 = arrayQuestion[j][3];
    btnOption4 = arrayQuestion[j][4];
    btnOption5 = arrayQuestion[j][5];

    option1.textContent = arrayQuestion[j][1];
    option2.textContent = arrayQuestion[j][2];
    option3.textContent = arrayQuestion[j][3];
    option4.textContent = arrayQuestion[j][4];
    option5.textContent = arrayQuestion[j][5];
}

btnResults.onclick = () => {
    divResults.style.display = "block";
    btnResults.style.display = "none";
    let tRanking = document.getElementById('tRanking');
    let body = document.createElement('tbody');
    stopQuiz();
    pushArray();
    pushNewArray();
    let countNewArray = arrayPeople.length;
    let k=1;
    for(y=0; y < countNewArray; y++){  
        let tr = document.createElement("tr");
        let td = document.createElement('td');
        td.innerText = k;
        tr.appendChild(td);
        for(x=0; x<3; x++){
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
        divWelcome.style.display = "block";
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
    startQuiz();
    
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
    startQuiz();
    
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

//using chronometer 
const chronometer = document.getElementById('chronometer');
let runTime = 0;

const startQuiz = () => {
    let startTime = Date.now() - runTime;
    chronometerInterval = setInterval( () => {
        runTime = Date.now() - startTime;
        chronometer.textContent = calculateTime(runTime);
    }, 1000)
}

const calculateTime = runTime => {
    const totalSeconds = Math.floor(runTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = totalMinutes.toString().padStart(2, "0");
    return `${displayMinutes}:${displaySeconds}`
}

const stopQuiz = () => {
    userTime = calculateTime(runTime);
    runTime = 0;
    clearInterval(chronometerInterval);
    chronometer.textContent = '00:00';
}