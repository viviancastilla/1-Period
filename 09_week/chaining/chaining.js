'use strict';

//Task 1
const users = [
    {id: 1, name: "Alice", active: true},
    {id: 2, name: "Bob", active: false},
    {id: 3, name: "Charlie", active: true},
];

const activeUsers = users
.filter(user => user.active)
.map(user => user.name.toUpperCase());

console.log(activeUsers);

//Task 2
const userData = {details: {contact: {email: "jane@example.com"}}};

console.log(userData.details.contact.email);

//Task 3
const customer = {orders: [1001, 1002]};

console.log(customer.orders?.[2]);

//Task 4
const fullName = "John Doe";

const initials = fullName.split(" ")
.map(word => word[0].toUpperCase())
.join(" ");

console.log(initials);

//Task 5
function stock(products){

    const inStock = products.filter(item => item.stock > 0)
    .map(item => item.name.toLocaleUpperCase())
    .join(", ");

    return inStock;
}
const products = [{name: "laptop", stock: 10}, {name: "Phone", stock: 0}];
console.log(stock(products));