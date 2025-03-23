//Task 1

localStorage.setItem("message", "Hello, LocalStorage");
let message = localStorage.getItem("message");

console.log(message);

//Task 2
let userSettings = {theme: "dark", language: "Spanish"};

localStorage.setItem("userSettings", JSON.stringify(userSettings));
let saved = JSON.parse(localStorage.getItem("userSettings"));

if(saved){
    console.log(saved.theme);
}else{
    console.log("nothing")
}

//Task 3
let favoriteBooks = [
    {title: "Hunger games", author:"Suzanne Collins"},
    {title: "Harry Potter", author: "J.K. Rowling"},
    {title: "The fault in our stars", author: "John Green"}
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
let books = JSON.parse(localStorage.getItem("favoriteBooks"));
if(books){
    books.forEach(book => console.log(book.title));
}else{
    console.log("no books");
}

//Task 4
function saveToLocalStorage(key, object){
    let jsonString = JSON.stringify(object);
    localStorage.setItem(key, jsonString);
}

let person = {name: "Alice", age: 25};
saveToLocalStorage("person", person);

let savePerson = JSON.parse(localStorage.getItem("person"));

console.log(savePerson);

//Task 5
function getFromLocalStorage(key){
    let value = localStorage.getItem(key);
    if(value){
        try{
            value = JSON.parse(value);
        }catch(error){
            console.log(value);
        }
        console.log(value);
    }else{
        console.log("no data");
    }
}
localStorage.setItem("user", JSON.stringify({name: "Maribel", age: 54}));
getFromLocalStorage("user");

//Task 6
let userProfile = {
    username: "vcastilla",
    email: "email@gmail.com",
    preferences: {theme: "light", notifications: false}
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));
let updatedProfile = JSON.parse(localStorage.getItem("userProfile"));
updatedProfile.preferences.theme = "dark mode";

localStorage.setItem("userProfile", JSON.stringify(updatedProfile));

console.log(updatedProfile);

//Task 7
let shoppingList = {
    items:["apples", "soap", "sugar"]
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItem(item){
    let list = JSON.parse(localStorage.getItem("shoppingList"));
    list.items.push(item);
    localStorage.setItem("shoppingList", JSON.stringify(list));

    console.log(list);
}
addItem("bananas");

//Task 8
let counter = {
    count: 0
}
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter(){
    let updateCounter = JSON.parse(localStorage.getItem("counter"));
    if(updateCounter){
        updateCounter.count = updateCounter.count + 1;
        localStorage.setItem("counter", JSON.stringify(updateCounter));

        console.log(updateCounter);
    }
}

incrementCounter();
incrementCounter();
incrementCounter();

//Task 9
let tasks = [
    {id: "vcastilla", description: "worker", completed: true}
];

let string = localStorage.setItem("tasks", JSON.stringify(tasks));

function markTasksComplete(taskId){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let task = tasks.find((element) => element.id === taskId);
    if(task){
        task.completed = true;
    }
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
}
markTasksComplete("vcastilla");

//Task 10
function clearLocalStorage(){
    localStorage.clear();
}

clearLocalStorage();
console.log(localStorage);