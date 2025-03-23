function planAdventure(isWeekend, isSunny, likesFoxes){
    if(isWeekend && isSunny && likesFoxes){
        return "Perfect day for a fox adventure!";
    }
    if(isWeekend || isSunny){
        return "Good day, but not perfect";
    }else{
        return "Maybe another day";
    }
}

console.log(planAdventure(true, true, true));
console.log(planAdventure(true, false, false));
console.log(planAdventure(false, false, true));