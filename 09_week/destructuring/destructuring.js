'use strict';

//Task 1
const employee = {name: "Sarah", position: "Manager", department: "HR"};

const{name: fullName, position: jobTitle} = employee;

console.log(fullName, jobTitle);

//Task 2
const colors = ["red", "blue", "green", "yellow"];

const [primary, secondary] = colors;

console.log(primary, secondary);

//Task 3
const user = {
    id: 101,
    details: {username: "john_doe", email: "john@example.com"},
};

const{
    details: {username, email},
} = user;

console.log(username,email);

//Task 4
function getUserInfo(user){
    const {name, role = 'user'} = {name: 'Alice', role: 'guest'};
    console.log(`${name} - ${role}`);
}

getUserInfo({name: "Alice"});

//Task 5
function introduce({name, age}){
    console.log(`${name} is ${age} years old.`);
}
introduce({name: "Emma", age: 28});

//Task 6
const car = {
    brand: 'audi',
    year: '2022'
};

function own(){
    const {brand, year} = car
    console.log(brand, year)
}

own(car);
