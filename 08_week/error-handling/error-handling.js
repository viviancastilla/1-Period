'use strict'

//Task 1
function task1(){
    try{
        random();
    }catch(error){
        console.log(`Error caught: ${error.message} is not defined`);
    }
}
task1();

//Task 2
function  task2(){
    try{
        console.log(variable);
    }catch(error){
        if(error instanceof ReferenceError){
        console.log("ReferenceError caught: my variable is not defined")
        }
    }
}
task2();

//Task 3
function task3(){
    try{
        throw new Error("An error occurred");
    }catch(error){
        console.log("Error:", error.message);
    }finally{
        console.log("Task completed");
    }
}

task3();

//Task 4
function parseJSON(jsonString){
    try{
        return JSON.parse(jsonString);
    }catch(error){
        console.log("Invalid JSON format");
        return null;
    }
}
console.log(parseJSON(`{"name": "Alice", "age": 25}`));
console.log(parseJSON("Invalid JSON text"));

//Task 5
function checkAge(age){
    try{
        if(age < 18){
            throw new Error("You must be at least 18.");
        }else{
            console.log("Access granted");
        }
    }catch(error){
        console.log("Error:", error.message);
    }
}
checkAge(20);
checkAge(16);

//Task 6
function saveUser(user){
    try{
        localStorage.setItem("user", JSON.stringify(user));
    }catch(error){
        console.log("Error:", error.message );
    }
}

function getUser(){
    try{
        const user= JSON.parse(localStorage.getItem("user"));
        return user;  
    }catch(error){
        console.log("Error:", error.message);
        return null;
    }
}

saveUser({name: "Alice", age: 25});
console.log(getUser());

localStorage.setItem("user", "{Invalid JSON}");
console.log(getUser());

//Task7
function checkProperty(obj, key){
        if(key in obj){
            console.log(obj[key]);
        }else{
            console.log("Property not found");
        }
}

checkProperty({name: "Bob", age: 30}, "name");
checkProperty({name: "Bob", age: 30}, "email");
console.log()

//Task 8
async function fetchData(url){
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        console.log(data);
    }catch (error){
        console.log("Network error or invalid URL:", error.message);
    }
}
fetchData("https://jsonplaceholder.typicode.com/users");
fetchData("invalid-url");

//Task 9
function task9(malformedURI){
    try{
        const decodedURI = decodeURIComponent(malformedURI);
        console.log(decodedURI);
    }catch(error){
        if(error instanceof URIError){
            console.log("URIError");
        }
    }
}
task9("https%3A%2F%2Fexample.com"); 
task9("%"); 

//Task 10
function clearStorage(){
    localStorage.clear();
    console.log("LocalStorage cleared.");
}
clearStorage();
