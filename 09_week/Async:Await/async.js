'use strict'

//Task 1
function delayedGreet(name, callback){
        setTimeout(() => {
            callback(`Hello, ${name}!`);
        }, 2000);
}

delayedGreet("Alice", (message) => console.log(message));

//Task 2
function processOrder(orderNumber, callback){
    setTimeout(() => {
        callback(`Order ${orderNumber} is ready for pickup.`);
    }, 3000);
}

processOrder(101, (message) => console.log(message));

//Task 3
function loginUser(username, validUser, callback){
    if(validUser === true){
        setTimeout(() => {
            callback(`Welcome, ${username}!`);
        }, 1000);
    }else{
        callback ("Invalid login");
    }
}

loginUser("Sam", true, (message) => console.log(message));
loginUser("Alex", false, (message) => console.log(message));

//Task 4
function fetchUserData(shouldFail){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldFail){
                resolve("User data retrieved");
            }else{
                reject("Error fetching user data");
            }
        }, 2000);
    });
}

fetchUserData(false).then(console.log).catch(console.error);
fetchUserData(true).then(console.log).catch(console.error);

//Task 5
function processOrderPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order received");
        }, 2000);
    })
    .then((message) => {
        console.log(message);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Preparing order");
            }, 3000);
        });
    })
    .then((message) => {
        console.log(message);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Order ready for pickup");
            }, 1000);
        });
    });
}

processOrderPromise().then(console.log);

//Task 6
function getUserProfile(userExists){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userExists === true){
                resolve("User profile loaded");
            }else{
                reject("User not found");
            }
        }, 2000);
    });
}

getUserProfile(true).then(console.log).catch(console.error);
getUserProfile(false).then(console.log).catch(console.error);

//Task 7
async function fetchUserDataAsync(shouldFail){
    await new Promise(resolve => setTimeout(resolve, 2000));

    if(shouldFail){
        throw ("Failed to fetch data");
    }else{
            return("User data loaded");
    }
}

fetchUserDataAsync(false).then(console.log).catch(console.error);
fetchUserDataAsync(true).then(console.log).catch(console.error);

//Task 8
async function checkoutCart(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Checking stock...");
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Payment processed");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Order completed!");
}

checkoutCart().then(() => console.log("Thanks for shopping!"));

//Task 9
async function fetchProductDetails(hasError){
    try{
        await new Promise((resolve) => setTimeout(resolve, 3000));
        if(hasError === false){
            throw "Product details retrieved";
        }else{
            return "Error loading product";
        }
    }catch(error){
        console.error("Error:", error);
        throw error;
    }
}

fetchProductDetails(false).then(console.log).catch(console.error);
fetchProductDetails(true).then(console.log).catch(console.error);