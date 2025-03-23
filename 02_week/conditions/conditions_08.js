function canVote(age){
    if(age >= 18){
        console.log("Eligleble to vote");
        return true;
    }else{
        console.log("Not eligible to vote");
        return false;
    }
}

console.log(canVote(16));
console.log(canVote(18));