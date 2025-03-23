//Task 1
const library = [
    { title: 'Alice´s adventure in wonderland', author: 'Carrol Lewis', yearPublished: 1865},
    { title: 'The tree little pigs', author: 'Joseph Jacobs', yearPublished: 1890},
    { title: 'Little red riding hood' , author: 'Charles Perrault', yearPublished:1697 },
]
//Task 2
console.log(library[0].title);
library[0].genre = ["fantasy", "adventure", "classic"]

// Task 3, both do the same thing)
library[0]["isAvailable"] = true
/*if(library[0].title === 'Alice in wonderland'){
        library[0].isAvailable = true;
    }*/
console.log(library[0].isAvailable);

//Task 4
function Book(title, author, yearPublished, genres){
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}
const newBook = new Book('Frankenstein', 'Mary Shelley', 1818, ['science fiction', 'horror'] );
library.push(newBook);


//Task 5
function createBook(title, author, yearPublished, genres) {
    const newBook = {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres,
    }
    return newBook
}
const createdBook = createBook('Frankenstein', 'Mary Shelley', 1818, ['science fiction', 'horror'] )
library.push({...createdBook})
// If you dont destructure you will return book {title: "Frakenstein" etc }

//Task 6
const jsonString = JSON.stringify(library);
console.log(jsonString);
const parsedLibrary = JSON.parse(jsonString);
console.log(parsedLibrary[0].title);

//Task 7
const students = [
    {name: 'Vivian', age: 21, grade: 95},
    {name: 'Barbara', age: 24, grade: 93},
    {name: 'Jaime', age: 25, grade: 88},
];
for(let i = 0; i < 3; i++){
    if(students[i].grade > 90){
        console.log(students[i].name);
    }
}

//Task 8
let car = {
    brand: 'audi',
    model: 'a3',
    year: '2023',
    isElectric: false
}
function carInfo(){
    if( car.isElectric){
        console.log("This car is eco-friendly");
    }else{
        console.log("This car has true fuel.");
    }
}
carInfo();

//Task 9
let moviesArr = [ 
    {
        title: "Star wars",
        director: "J.J. Abrams",
        rating: 8.7
    },
    {
        title: "Harry Potter",
        director: "Mike Newell",
        rating: 9
    },
    {
        title: "Madam web",
        director: "S.J. Clarkson",
        rating: 4
    }
]
function highRating(){
    for(let movie of moviesArr){
        if(movie.rating > 8){
            console.log(movie.title);
        }
    }
}
highRating();

//Task 10
function findOldestCar(){
    let carYear = Infinity;
    let moreCars = [
        {
            brand: 'audi',
            model: 'a3',
            year: 2023,
            isElectric: true
        },
        {
            brand: 'nissan',
            model: 'sentra',
            year: 2020,
            isElectric: false
        },
        {
            brand: 'susuki',
            model: 'fronx',
            year: 2015,
            isElectric: false
        }
    ]
    for(let i = 0; i < moreCars.length; i++){
        if(moreCars[i].year < carYear){
            carYear = moreCars[i].year;
        };
    }
    return carYear;
}
console.log(findOldestCar());

//Task 11
let userProfiles = [
    {username: "aUserName",
    email: "school.email@gmail.com",
    isAdmin: true},
    {username: "anotherUser",
    email: "school@gmail.com",
    isAdmin: false},
    {username: "andOneMore",
    email: "email@gmail.com",
    isAdmin: true},
]
function admin(){
    let isAdmin = [];
    for(let i = 0; i < userProfiles.length; i++){
        if(userProfiles[i].isAdmin === true){
            isAdmin.push(userProfiles[i].username);
        }
    }
    return isAdmin;
}
console.log(admin());

//Task 12
let orders = [
    {
        orderId: "79",
        customerName: "Nea",
        totalAmount: 39,
        status: "completed"
    },
    {
        orderId: "80",
        customerName: "Bennet",
        totalAmount: 20,
        status: "pending"
    }
]
function checkOrders(){
    let completedOrders = [];
    for(let i = 0; i < orders.length; i++){
        if(orders[i].status === "completed"){
            completedOrders.push(orders[i]);
        }
    }
    return completedOrders
}
console.log(checkOrders());

//Task 13
let smartphone = {
    brand: "iphone",
    model: 11,
    batteryLife: "70%",
    is5GEnabled: false
}

function check5GCompability(){
    if(smartphone.is5GEnabled === true){
        return "This phone supports 5G!"
    }else{
        return "This phone does not support 5G";
    }
}
console.log(check5GCompability());

//Task 14
let fox = {
    name: "Jonas",
    age: 21,
    habitat: "forests"
}
function oldOrYoung(){
    if(fox.age > 3){
        return "This fox is an adult";
    }else{
        return "This fox is young";
    }
}
console.log(oldOrYoung());

//Task 15
let employees = [
    {
        name: "Micha",
        position: "gardener",
        salary: 100,
    },
    {
        name: "Jonas",
        position: "cop",
        salary: 50,
    },
    {
        name: "Bennet",
        position: "student",
        salary: 2,
    }
]

function totalSalary(){
    let salary = 0;
    for(let i = 0; i < employees.length; i++){
        salary = employees[i].salary + salary;
    }
    return salary;
}
console.log(totalSalary());

