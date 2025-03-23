function checkFoxLover(age, likesFoxes){
    if(age >= 18){
        if(likesFoxes === true){
            return "You are an adult who likes foxes!";
        }else{
            return "Not a fox fan, but that's okay!";
        }
    }   
}

console.log(checkFoxLover(20, false));