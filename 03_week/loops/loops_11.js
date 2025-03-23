function generateMultiplicationTable(){
    let num = Number(prompt("Type a number"));

    if(isNaN(num) || num <= 0){
        console.log("Not a valid");
        return;
    }

    for(let i = 1; i < 11; i++){
        let multiplication = num * i;
        console.log(num + "*" + i + "=" + multiplication);
    }
}

generateMultiplicationTable();