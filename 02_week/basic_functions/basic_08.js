function roundNumber(num, precision){
    return parseFloat(num.toFixed(precision));
}

console.log(roundNumber(19.56789, 2));