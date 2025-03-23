'use strict';

//Task 1
const fruits = ["apple", "banana", "orange"];

const newFruits = [...fruits];
newFruits.push("grape");

console.log(fruits);

//Task 2
const oldTask = ["task1", "task2"];
const newTasks = ["task3", "task4"];

const allTasks = [...oldTask, ...newTasks];

console.log(allTasks);

//Task 3
const defaultSettings = {theme: "light", fontSize: 14};
const userSettings = { theme: "dark"};

const{theme, fontSize} = {...defaultSettings, ...userSettings};
const finalSettings = {theme, fontSize};

console.log(finalSettings);

//Task 4 
function sumNumbers(...numbers){
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumNumbers(2, 3, 4));

//Task 5
const book = {title: "JavaScript Guide", pages: 400, author: "Jhon Doe"};

const {title, ...extraInfo} = book;
console.log(title, extraInfo);

//Task 6
function average(...numbers){
    let sum = numbers.reduce((sum, num) => sum + num, 0);
    let total = numbers.length > 0 ? sum/numbers.length : 0

    console.log(total);
}
average(10,20,30,40);