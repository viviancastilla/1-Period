let text = document.getElementById("content");
let button = document.getElementById("changeText");

function changeText(){
    text.textContent ="Hello, World";
}

button.addEventListener("click", changeText);
