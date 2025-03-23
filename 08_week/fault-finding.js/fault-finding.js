'use strict';

//Task 1
function greet(name){
    if (name) {
        return "Hello " + name + "!";
    }else{
        return "Hello, guest!";
    }
}

console.log(greet("Alice"))
console.log(greet());

//Task 2
function calculatePrice(price, quantity){
    if(!quantity){
        return 1;
    }
    return price * quantity;
}

console.log(calculatePrice(10, 2)),
console.log(calculatePrice(5));

//Task 3
function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

//Task 4
function countToFive(){
    for (let i = 1; i <= 5; i++){
        console.log(i);
    }
}
countToFive();

//Task 5
function getLastItem(arr){
    return arr[arr.length - 1];
}

console.log(getLastItem(["apple", "banana", "cherry"]));
console.log(getLastItem([1, 2, 3]));

//Task 6
function parseJson(jsonString){
    try{
        return JSON.parse(jsonString);
    }catch(error){
        return "Erorr (invalid JSON)";
    }
}
console.log(parseJson('{"name": "Alice", "age": 25}'));
console.log(parseJson("{name: 'Alice', age: 25}'"));

//Task 7
function getEmail(user){
        return user.email;
}

console.log(getEmail({name: "Alice", email: "alice@example.com"}));

//Task 8
function double(num){

    return num + num;
}

function square(num){
    return num * num;
}

function processNumber(num){
    return square(double(num));
}

console.log(processNumber(3));
console.log(processNumber(4));

//Task 9
function sortNumbers(arr){
    return arr.sort((a, b) => a - b);
}
console.log(sortNumbers([5, 3, 9, 1]));
console.log(sortNumbers([20, 100, 3, 50]));

//Task 10
const users = [
    {firstName: "Alice", lastName: "Smith"},
    {firstName: "Bob", lastName: "Jones"},
];
function getFullNames(users){
    return users.map(user => user.firstName + " " + user.lastName);
}
console.log(getFullNames(users));

//Task 11
const userData = {
    users: [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"},
    ],
};

function getUserNames(userData){
    return userData.users.map(users => users.name);
}
console.log(getUserNames(userData));

//Task 12
const products =[
    {name: "Laptop", price: 1200},
    {name: "Phone", price: 800},
    {name: "Mouse", price: 50},
];

function filterProducts(products, maxPrice){
    return products
        .filter(product => product.price < maxPrice)
        .map(product => product.name);
}
console.log(filterProducts(products, 1000));

//Task 13
function saveUser(user){
    localStorage.setItem("user", JSON.stringify(user));
}
function getUser(){
    const user = localStorage.getItem("user");
    return localStorage.getItem("user");
}

saveUser({name: "Alice", age: 25});
console.log(getUser());

//Task 14
function squareNumbers(arr){
    let squaredArr = [];
    for(let i =0; i < arr.length; i++){
        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
}
console.log(squareNumbers([1, 2, 3, 4]));

//Task 15
const students = [
    {name: "Alice", score: 90},
    {name: "Bob", score: 75},
    {name: "Charlie", score: 85},
];
function getTopStudents(studentList){
    return studentList
        .filter(student => student.score > 80)
        .map(student => student.name);
}
console.log(getTopStudents(students));