//initialize variables with HTML elements using id
const h1 = document.getElementById("h1");

let containersCards = document.querySelectorAll("#container-card");
let textCards = document.querySelectorAll("#textCard");

//initialize variables
const arrayFruit = ["🍎", "🍑", "🍒", "🍐", "🍍", "🥭"],
    nums =[], 
    usedNum = [], 
    usedNum2 = [],
    countA = arrayFruit.length;

let arrayBtnClic = [],
    arrayOption =[],
    clicBtn, 
    clicCard, 
    i=5, 
    j=0;

// Random numbers that do not repeat with the length of the array 
while(usedNum.length < countA){
    let randomNum = Math.ceil(Math.random() * countA);
    randomNum  = randomNum - 1;
    if(!usedNum.includes(randomNum)){
        usedNum.push(randomNum);
    }
}

while(usedNum2.length < countA){
    let randomNum2 = Math.ceil(Math.random() * countA);
    randomNum2 = randomNum2 - 1;
    if(!usedNum2.includes(randomNum2)){
        usedNum2.push(randomNum2);
    }
}

// Add the randoms numbers to an empty array
for(k=0; k < countA; k++){
    nums.push(usedNum[k], usedNum2[k])
}

// Reload page 
const reset = () =>{
    location.reload()
}

// Count error in the game
const error = () =>{
    i = i-1;
    // console.log(i)
    h1.textContent = `Tienes ${i} intentos`;
    if(i == 0){ setTimeout(alertwindow1, 1000); }
}

// Count acert in the game
const acert = () => {
    j = j+1
    if(j == 6){ setTimeout(alertwindow2, 1000); }
}

// Messagge if you have lose
const alertwindow1 = () => {
    alert("Has perdido, suerte la proxima vez");
    reset()
}

// Messagge if you have win
const alertwindow2 = () =>{
    alert("Felicidades, has completado la prueba");
    reset();
}

// Add class flip for animation in 2 seg before remove this class in 4 seg
const initialFlip = () => {
    containersCards.forEach(container => { 
            container.classList.toggle('flip');
    });
}

setTimeout(initialFlip, 2000);

setTimeout(initialFlip, 4000);

// Assign the content that each card will have
let n=0;
textCards.forEach(textCard => {
    textCard.textContent = arrayFruit[nums[n]];
    n++;
});


// All cards with onclick event
containersCards.forEach((card, index) => {   
    card.addEventListener('click', () =>{
        clicBtn = card;
        clicCard = arrayFruit[nums[index]];
        card.classList.add('flip');
        pushArray();
    });
});

//push Array with option select
const pushArray = () => {
    arrayBtnClic.push(clicBtn);
    arrayOption.push(clicCard);
    if(arrayOption.length == 2 && arrayBtnClic.length == 2){
        comparison(arrayOption, arrayBtnClic)
    }
}

//comparation attribut array
const comparison = (aOption) => {
    a = aOption[0];
    b = aOption[1];
    if(a == b){
        acert();
        arrayBtnClic = [];
        arrayOption = [];
    } else { 
        setTimeout(removeFlip, 1000)
        error();
    }
}

//Remove the flip class from the card if it is not equal
const removeFlip = () =>{
    arrayBtnClic[0].classList.remove('flip');        
    arrayBtnClic[1].classList.remove('flip');
    arrayBtnClic = [];
    arrayOption = [];
}