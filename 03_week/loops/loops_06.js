function askToContinue(){
    let sum = 0;
    let count = 0;
    let answer = "y";
    let average;

    while(true){
        let num = prompt("Enter a number");
        num = Number(num);
    
        answer = prompt ("Do you want to continue giving numbers? (y/n)")
        if(answer === "y"){
            sum = sum + num;
            count++;
            }
        if(answer === "n"){
            break;
            }
    }

    if( count > 0){
        average = sum / count;
        console.log("The average is: " + average);
    }
}

askToContinue();