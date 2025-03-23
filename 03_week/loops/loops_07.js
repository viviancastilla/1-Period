function sumAndAverage(){   
    let sum = 0;
    let average;
    let smallest = Infinity;
    let largest = -Infinity;
    let validCount = 0;

    for(let i = 0; i <10; i++){
        let num = prompt("Enter 10 numbers");
        num = Number(num);

        if(isNaN(num)){
            console.log("not a number");
            i--;
        }else{
            sum = num + sum;
            validCount++;
        }
        if(num < smallest){
            smallest = num;
        }
        if(num > largest){
            largest = num;
        }
    }

    if(validCount >0){
        average = sum / validCount;
    }
    console.log("The sum is: " + sum);
    console.log("The average is: " + average);
    console.log("The smallest is: " + smallest);
    console.log("The largest is: " + largest);
}

sumAndAverage();