//Task 1
const student ={
    name: "Vivian",
    age: 21,
    grade: "A",
}
let studentJSON = JSON.stringify(student);
console.log(studentJSON);

//Task 2
let studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//Task 3
let classroom = [
    {name: 'Barbara', age: 24, grade: "A"},
    {name: 'Jaime', age: 25, grade: "A"},
    {name: 'Sofia', age: 23, grade: "B"}
]
let classroomJSON = JSON.stringify(classroom);
console.log(classroomJSON);

//Task 4
let classroomObject = JSON.parse(classroomJSON);
classroomObject.forEach(student => {
    console.log(classroomObject);
});

//Task 5
let weatherReport = {
    temperature: 5,
    humidity: "low",
    conditions: "sunny"
}
let weatherJSON = JSON.stringify(weatherReport);
console.log(weatherJSON);

//Task 6
let movies = [
    {title: "Star wars", director: "J.J.Abrams" , rating: 8},
    {title: "Cinderella", director: "Kenneth Branagh" , rating: 9},
    {title: "Harry Potter", director: "Alfonso Cuaron", rating: 7}
    ];

let moviesJSON = JSON.stringify(movies);
let moviesObject = JSON.parse(moviesJSON);
movies.forEach(movies => {
    if(movies.rating > 8){
        console.log(movies.title); 
    }
});

//Task 7
function filterHighRatedMovies(jsonString){
    let movieArray = JSON.parse(jsonString);
    return movieArray.filter(function(movie){
        return movie.rating > 8;
    });
}
let highRatedMovies = filterHighRatedMovies(moviesJSON);
console.log(highRatedMovies)

//Task 8
let shoppingCart = {
    items: [
        {name: "cereal", price: 3},
        {name: "yogurt", price: 1.19},
        {name: "butter", price: 2.30}
    ]
}
let shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);

//Task 9
function totalCartValue(jsonString){
    let object = JSON.parse(jsonString);
    let total = 0;

    object.items.forEach(item =>{
        total = item.price + total;
    });
    return total;
}
let realTotal = totalCartValue(shoppingCartJSON);
console.log(realTotal.toFixed(2));

//Task 10
let gameProgress = {
    level: 2,
    score: 20,
    livesRemaining: 2,
}
let gameProgressJSON = JSON.stringify(gameProgress);
console.log(gameProgressJSON);

let gameProgressObject = JSON.parse(gameProgressJSON);
gameProgressObject.score = gameProgressObject.score + 100;
console.log(gameProgressObject);
