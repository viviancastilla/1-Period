function canEnterEvent(age, hasID){
    if( age >= 18 && hasID ){
        return "You can enter the event.";
    }else{
        return "You cannot enter.";
    }
}

console.log(canEnterEvent(18, true));
console.log(canEnterEvent(16, true));
console.log(canEnterEvent(20, false));