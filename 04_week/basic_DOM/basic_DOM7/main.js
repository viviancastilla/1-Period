let num = 0;
const button = document.getElementById("button");
const count = document.getElementById("count");

function numOfClicks(){
    num++;
    count.innerHTML = num;
}

button.addEventListener("click", numOfClicks);