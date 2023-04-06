//initialize variables with HTML elements using id
const   card1 = document.getElementById("card1"),
        textCard1 = document.getElementById("textCard1"),
        card2 = document.getElementById("card2"),
        textCard2 = document.getElementById("textCard2"),
        card3 = document.getElementById("card3"),
        textCard3 = document.getElementById("textCard3"),
        card4 = document.getElementById("card4"),
        textCard4 = document.getElementById("textCard4"),
        card5 = document.getElementById("card5"),
        textCard5 = document.getElementById("textCard5"),
        card6 = document.getElementById("card6"),
        textCard6 = document.getElementById("textCard6"),
        card7 = document.getElementById("card7"),
        textCard7 = document.getElementById("textCard7"),
        card8 = document.getElementById("card8"),
        textCard8 = document.getElementById("textCard8"),
        card9 = document.getElementById("card9"),
        textCard9 = document.getElementById("textCard9"),
        card10 = document.getElementById("card10"),
        textCard10 = document.getElementById("textCard10"),
        card11 = document.getElementById("card11"),
        textCard11 = document.getElementById("textCard11"),
        card12 = document.getElementById("card12"),
        textCard12 = document.getElementById("textCard12"),
        h1 = document.getElementById("h1");

//initialize variables
const arrayFruit = ["🍎", "🍑", "🍒", "🍐", "🍍", "🥭"],
    nums =[], 
    usedNum = [], 
    usedNum2 = [],
    countA = arrayFruit.length;

let arrayBtnClic = [],
    arrayOption =[],
    clicBtn, 
    card, 
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
    console.log(i)
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

// Animation inicial flip in 2 seg
const initialFlip = () => {
    card1.classList.add('flip');
    card2.classList.add('flip');
    card3.classList.add('flip');
    card4.classList.add('flip');
    card5.classList.add('flip');
    card6.classList.add('flip');
    card7.classList.add('flip');
    card8.classList.add('flip');
    card9.classList.add('flip');
    card10.classList.add('flip');
    card11.classList.add('flip');
    card12.classList.add('flip');
}
setTimeout(initialFlip, 2000);

// Animation remove initial flip in 4 seg
const removeInitialFlip = () => {
    card1.classList.remove('flip');
    card2.classList.remove('flip');
    card3.classList.remove('flip');
    card4.classList.remove('flip');
    card5.classList.remove('flip');
    card6.classList.remove('flip');
    card7.classList.remove('flip');
    card8.classList.remove('flip');
    card9.classList.remove('flip');
    card10.classList.remove('flip');
    card11.classList.remove('flip');
    card12.classList.remove('flip');
}
setTimeout(removeInitialFlip, 4000);

// Add the animation when clicking on one of the cards
const addAnimation = () => { clicBtn.classList.add('flip');}

// Assign the content that each card will have
textCard1.textContent = arrayFruit[nums[0]];
textCard2.textContent = arrayFruit[nums[1]];
textCard3.textContent = arrayFruit[nums[2]];
textCard4.textContent = arrayFruit[nums[3]];
textCard5.textContent = arrayFruit[nums[4]];
textCard6.textContent = arrayFruit[nums[5]];
textCard7.textContent = arrayFruit[nums[6]];
textCard8.textContent = arrayFruit[nums[7]];
textCard9.textContent = arrayFruit[nums[8]];
textCard10.textContent = arrayFruit[nums[9]];
textCard11.textContent = arrayFruit[nums[10]];
textCard12.textContent = arrayFruit[nums[11]];

// All cards with onclick event
card1.onclick = () => {
    card = arrayFruit[nums[0]];
    clicBtn = card1;
    addAnimation();
    pushArray();
}

card2.onclick = () => {
    card = arrayFruit[nums[1]];
    clicBtn = card2;
    addAnimation();
    pushArray();
}

card3.onclick = () => {
    card = arrayFruit[nums[2]];
    clicBtn = card3;
    addAnimation();
    pushArray();
}

card4.onclick = () => {
    card = arrayFruit[nums[3]];
    clicBtn = card4;
    addAnimation();
    pushArray()
}

card5.onclick = () => {
    card = arrayFruit[nums[4]];
    clicBtn = card5;
    addAnimation();
    pushArray()
}

card6.onclick = () => {
    card = arrayFruit[nums[5]];
    clicBtn = card6;
    addAnimation();
    pushArray()
}

card7.onclick = () => {
    card = arrayFruit[nums[6]];
    clicBtn = card7;
    addAnimation();
    pushArray()
}

card8.onclick = () => {
    card = arrayFruit[nums[7]];
    clicBtn = card8;
    addAnimation();
    pushArray()
}

card9.onclick = () => {
    card = arrayFruit[nums[8]];
    clicBtn = card9;
    addAnimation();
    pushArray()
}

card10.onclick = () => {
    card = arrayFruit[nums[9]];
    clicBtn = card10;
    addAnimation();
    pushArray()
}

card11.onclick = () => {
    card = arrayFruit[nums[10]];
    clicBtn = card11;
    addAnimation();
    pushArray()
}

card12.onclick = () => {
    card = arrayFruit[nums[11]];
    clicBtn = card12;
    addAnimation();
    pushArray()
}

//push Array with option select
const pushArray = () => {
    arrayBtnClic.push(clicBtn)
    arrayOption.push(card)
    if(arrayOption.length == 2 && arrayBtnClic.length == 2){
        comparison(arrayOption, arrayBtnClic)
    }
}

//comparation attribut array
const comparison = (aOption, aBtnClic) => {
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