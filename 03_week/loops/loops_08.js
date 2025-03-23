function findMinMax(){
    let count = Number(prompt("How many numbers do you want to input?"));
    let largest = -Infinity;
    let smallest = Infinity;

    if(isNaN(count) || count <= 0){
        console.log("Not a valid number");
        return;
    }
    for(let i = 0; i < count; i++){
        let num = Number(prompt(`Enter number ${i + 1}:`));

        if(isNaN(num)){
            console.log("Try again");
            i--;
            continue;
        }
        if(num < smallest){
            smallest = num;
        }
        if(num > largest){
            largest = num;
        }
    }
    
    console.log("Smallest number: " + smallest);
    console.log("Larrgest number" + largest);
}

findMinMax();