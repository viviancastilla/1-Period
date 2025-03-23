let backToTopBtn = document.querySelector('.backToTop');
let overlay = document.querySelector('.overlay');
let modalButton = document.querySelector('.about_content button');

console.log(modalButton);

function scroll(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopBtn.style.display = "block";
    }else{
        backToTopBtn.style.display = "none";
    }
}

function backToTop(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    console.log('backToTop was triggered');
}

window.addEventListener("scroll", scroll);
backToTopBtn.addEventListener('click',backToTop);
modalButton.addEventListener('click', displayElement)

function displayElement(){
    overlay.classList.toggle('hidden')
}