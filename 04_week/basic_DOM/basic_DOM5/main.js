const input = document.getElementById("colorInput");
const button = document.getElementById("click");
const paragraph = document.getElementById("textColor");

function backgroundColor(){
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    let randomColor;

    switch(randomNumber){
        case 1:
            randomColor = "green";
            break;
        case 2:
            randomColor = "blue";
            break;
        case 3:
            randomColor = "red";
            break;
        case 4:
            randomColor = "yellow";
            break;
        case 5:
            randomColor = "pink";
            break;
        default: 
            randomColor = "white";
    }
    document.body.style.backgroundColor = randomColor;
}

function updateTextColor(){
    paragraph.style.color = input.value;
}

button.addEventListener("click", backgroundColor);
input.addEventListener("input", updateTextColor);