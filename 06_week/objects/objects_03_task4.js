//Task 4
let counter ={
    value: 5
};

function updateDisplay(){
    document.getElementById("counterDisplay").innerText = counter.value;
}

function increaseDisplay(){
        counter.value++;
        updateDisplay();
}
    
function decreaseDisplay(){
    counter.value--;
    updateDisplay();
}

document.addEventListener("DOMContentLoaded", function(){
    const increaseButton = document.getElementById("increase");
    const decreaseButton = document.getElementById("decrease");

        console.log("Increse button:", increaseDisplay);
        console.log("decrease button:", decreaseDisplay);
    
    if(increaseButton && decreaseButton){
        increaseButton.addEventListener("click", increaseDisplay);
        decreaseButton.addEventListener("click", decreaseDisplay);
        updateDisplay();
    }
});