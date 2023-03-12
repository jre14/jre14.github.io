const btnSwitch = document.getElementById("switch");
const btnTop = document.getElementById("top");

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active')
});

btnTop.addEventListener('click', () => { 
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});
