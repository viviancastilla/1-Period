function canEat(isHungry, hasFood){
    if(isHungry && hasFood){
        return "Time to eat";
    }
    else{
        return "You need to find food!";
    }
}

console.log(canEat(true, false));