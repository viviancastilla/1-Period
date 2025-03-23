function findFox(hasFox, foxName){
    if(hasFox && foxName === "Fiona"){
        return "Fiona the fox is here!";
    }else{
        return "No foxes found";
    }
}

console.log(findFox(true, "Sofia"));