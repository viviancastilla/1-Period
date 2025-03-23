const input = document.getElementById("visibility");
const button = document.getElementById("click");

function makeVisible(){
    if(input.style.display === "none"){
        input.style.display = "block";
    }else{
        input.style.display = "none";
    }
}

button.addEventListener("click", makeVisible);