function validatePassword(){
    let password = prompt("password")
    while(password !== "correct123"){
        password = prompt("Try again");
    }
    console.log("Acces granted!");
}

validatePassword();