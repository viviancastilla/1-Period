//Task 1
let weather = {
    temperature: 20,
    humidity: "high",
    condition: "rainy"
}

function checkWeather(){
    if(weather.condition === "rainy"){
        return "Take an umbrella!";
    }else{
        return "The weather is nice!"
    }
}
console.log(checkWeather());

//Task 2
let shoppingCart = {
items: [
    {name: "cereal", quantity: 2, price: 3.40},
    {name: "apple", quantity: 5, price: 0.35},
    {name: "milk", quantity: 1, price: 1}
    ]
};

function calculateTotalPrice(){
let totalPrice = 0;
    for(let i = 0; i < shoppingCart.items.length; i++){
        totalPrice = shoppingCart.items[i].price + totalPrice;
    }
    return totalPrice;
}
console.log("The total price is: " + calculateTotalPrice());

//Task 3
let restaurants = [
    {
        name: "Mirella",
        cuisineType: "Italian",
        rating: 9
    },
    {
        name: "Itsedemo",
        cuisineType: "Asian",
        rating: 10
    },
    {
        name: "King kebab",
        cuisineType: "Arab",
        rating: 2
    }
]

function restaurantRaitings(){
    return restaurants
        .filter(restaurants => restaurants.rating > 4)
        .map(restaurants => restaurants.name);
}
console.log(restaurantRaitings());

//Task 4
let bankAccount = {
    accountholder: "Vivian",
    balance: 1500,
    transaction: [20, 50, 0, 10]
};

let totalBalance = bankAccount.balance;

    for(let transactionNum of bankAccount.transaction){
        totalBalance = totalBalance + transactionNum;
    }
    console.log(totalBalance);

//Task 5
let students = [
    {
        name: "Sofia",
        scores: [8, 6, 7, 9, 9],
        averageSocres: 0
    },
    {
        name: "Nea",
        scores: [8, 8, 8, 9, 9],
        averageSocres: 0
    },
    {
        name: "Maribel",
        scores: [9, 7, 7, 9, 9],
        averageSocres: 0
    }
];

function studentsScores(){
    for(let i = 0; i < students.length; i++){
        let gradesCount = 0;
        let totalScores = 0;

        for(let a = 0; a < students[i].scores.length; a++){
            gradesCount++;
            totalScores = students[i].scores[a] + totalScores;
        }
        let finalScores = totalScores / gradesCount;
        students[i].averageSocres = finalScores;
    }
    return students;
}
console.log(studentsScores());

//Task 6
let courses = [
    {
        courseName: "math",
        instructor: "Hannu",
        studentsEnrolled: 36
    },
    {
        courseName: "english",
        instructor: "Veera",
        studentsEnrolled: 33
    },
    {
        courseName: "Physics",
        instructor: "Anna",
        studentsEnrolled: 20
    }
]
function manyStudents(){
    let coursesWithManyStudents = [];
    courses.forEach(course => {
        if(course.studentsEnrolled > 30){
            coursesWithManyStudents.push(course.courseName);
        }
    });
    return coursesWithManyStudents;
}
console.log(manyStudents());

//Task 7
let pet = {
    species: "dog",
    name: "polly",
    isVaccinated: false
}

function vaccineCheck(){
    for(let vaccine in pet){
        if(pet.isVaccinated === false){
            return "Vaccination required";
        }else{
            "Your pet is vaccinated!"
        }
    }
}
console.log(vaccineCheck());

//Task 8
function City(name, population,landmark){
    this.name = name;
    this.population = population;
    this.landmark =  landmark;
}
let newYork = new City("New york", 82580000, "Statue of Liberty");
let helsinki = new City("Helsinki", 656920, "Helsinki Cathedral");
let brussels = new City("Brussels", 188737, "Grand Place");

function populationNum(cities){
    cities.forEach(city => {
        if(city.population > 1000000 ){
            console.log(city.name + ": This is a big city!");
        }
    });
}
populationNum([newYork, helsinki, brussels]);

//Task 9
let transactions = [
    {
        type: "credit",
        amount: 1000
    },
    {
        type: "credit",
        amount: 525
    },
    {
        type: "credit",
        amount: 300
    }
]

function calTotalBalance(){
    let totalBalance = 0;
    transactions.forEach(money => {
        totalBalance = money.amount + totalBalance;
    })
    return totalBalance;
}
console.log(calTotalBalance());

//Task 10
let foxPack = {
    foxes: [
        {name: "Nick", age: 1, furColor: "red"},
        {name: "Jess", age: 4, furColor: "white"},
        {name: "Megan", age: 1, furColor: "orange"},
    ]
};

function youngFoxes(){
    let young = foxPack.foxes.filter(fox => fox.age < 2);
    return young;
}
console.log(youngFoxes());

//Task 11
let gameCharacter = {
    name: "Barbara",
    level: 5,
    health: 2,
    inventory: ["apple", "knife", "wood"]
};

function checkInventory(){
    gameCharacter.inventory.forEach(things => {
        console.log(things);
    });
}
checkInventory();

//Task 12
let employees = [
    {name: "Jaime", role: "Manager", workinghours: 42},
    {name: "Maribel", role: "cheff", workinghours: 45},
    {name: "Barbara", role: "Marketing", workinghours: 25}
]

function hardWorking(){
    employees.forEach(hours => {
        if(hours.workinghours > 40){
        console.log(hours.name);   
        }
    });
};
hardWorking();

//Task 13
let musicAlbums = [
    {title: "Jazz", artist: "Queen", releaseYear: 1978},
    {title: "American Idiot", artist: "Green Day", releaseYear: 2004},
    {title: "21", artist: "Adele", releaseYear: 2011},
    {title: "Don't smile at me", artist: "Billie Eilish", releaseYear: 2017},
]

function newAlbums(){
    musicAlbums.forEach(year => {
        if(year.releaseYear > 2000){
            console.log(year.title);
        }
    });
};
newAlbums();

//Task 14
let cars = [
    {brand: "audi", model: "a3", horsepower: 250},
    {brand: "nissan", model: "centra", horsepower: 200},
    {brand: "susuki", model: "s-cross", horsepower: 150},
]

function highHorsepower(){
    let highest = -Infinity;
    cars.forEach(car => {
        if(car.horsepower > highest)
            highest = car.horsepower
    });
    return highest;
}
console.log(highHorsepower());

//Task 15
let airports = [
    {name: "Helsinki-Vanta", country: "Finland", flightsPerDay:40},
    {name: "General Mariano Escobedo", country: "Mexico", flightsPerDay:350},
    {name: "Luchthaven Zaventem", country: "Belgium", flightsPerDay: 600},
]

function mostFlights(){
    let highest = -Infinity;
    let airportWithMostFlights = "";

    airports.forEach(flights => {
        if(flights.flightsPerDay > highest){
            highest = flights.flightsPerDay;
            airportWithMostFlights = flights.name;
        }
    });
    return airportWithMostFlights;
}
console.log(mostFlights());