function calculateAverageUntilZero(){
    let sum = 0;
    let count = 0;
    let average;

    while(true){
        let num = prompt ("Enter a number");
        num = Number(num);

        if(num === 0){
            break;
        }
        if(isNaN(num)){
            console.log("not a number");
        }else{
            sum = num + sum;
            count++;
        }
    }
    if(count > 0){
        average = sum / count;
        console.log("The average is: " + average);
    }else{
        console.log("no vlaid input")
    }
}

calculateAverageUntilZero();