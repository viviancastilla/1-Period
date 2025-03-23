function countdownTimer(){
    let countDown = Number(prompt("Type any number for a countdown"))
    let count = 0

    if(isNaN(countDown) || countDown <= 0){
        console.log("Not valid");
        return;
    }

    for(let i = countDown; i >= 0; i--){
        console.log(i);
        if(i === 0)
            console.log("Time's up!");
    }    
}

countdownTimer();