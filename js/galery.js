let buttons = document.querySelectorAll("#heart");
buttons.forEach(heart => { 
    heart.addEventListener('click', () => {
        heart.classList.toggle("fa-regular");
        heart.classList.toggle("fa-solid");
    });
});