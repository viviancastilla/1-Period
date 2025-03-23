//Task 1
function task1 (){
    "use strict";
    try{
        variable = "not declared";
    }catch(error){
        console.log("Strict mode error: variable is not defined " + error.message);
    }
}
task1();

//Task 2
function task2(){
    try{
        const MAX_USERS = 100;
        let currentUsers = 10;

    MAX_USERS = 50;
    }catch(error){
        console.log(error.message);
    }
}
task2();

//Task 3
function task3(){
    try{
        let userProfile ={
            name: "Alice",
            email: "alice@example.com",
            isAdmin: true
        };
        console.log(userProfile);
    }catch(error){
        console.log(error.message);
    } 
}
task3();

//Task 4
function calculateArea(width, height){
    let area = width * height;
    console.log(area);
}
calculateArea(5, 5);

//Task 5
const DISCOUNT = 0.1;

function applyDiscount(price){
    try{
        let priceDiscount = price * DISCOUNT;
        let finalPrice = price - priceDiscount;

        console.log(finalPrice);
    }catch(error){
        console.log('An error ocurred:', error);
    }
}
applyDiscount(100);

//Task 6
function greetUser(name){
    /* Greets and logs name of the user */
    console.log(`Hello, ${name}!`);
}
greetUser("Bob");

//Task 7
function checkNumber(n){
    /* if it is bigger than 0 it will return "positive" */
    if(n >= 0){              
        return "positive"; 
    }else{
        return "negative";      /* Otherwise it will return it as "negative" */
    }
}
console.log(checkNumber(-5));

//Task 8
function example(){
    let x = 10;
    console.log(x);
}
example();