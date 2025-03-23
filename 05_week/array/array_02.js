//Exercise 1
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function myAlphabetLength(){
    let lengthOfAlphabet = myAlphabet.length;
    if(lengthOfAlphabet >= 5){
        console.log("Array length is sufficient");
    }else{
        console.log("Array length is too short");
    }
}
myAlphabetLength();

//Task 2
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
console.log("Planet: Mercury, Index: " + planets.indexOf("Mercury"));
console.log("Planet: Venus, Index: " + planets.indexOf("Venus"));
console.log("Planet: Earth, Index: " + planets.indexOf("Earth"));
console.log("Planet: Mars, Index: " + planets.indexOf("Mars"));
console.log("Planet: Jupiter, Index: " + planets.indexOf("Jupiter"));

//Task 3
const mixedValues = [42, 'Hello', true, { name: 'Fox'}, null, undefined];

mixedValues.forEach(function (value, index){
    console.log("Item: " + value + ", Index: " + index +  ", Type: ", typeof value);
});

//Task 4
let myArr = [1, 'Dog', 3.14, false];
console.log(myArr[0], myArr[1], myArr[2], myArr[3]);

//Task 5
let reserve1Animals = ['Fox', 'Deer', 'Owl', 'Bear'];
let reserve2Animals = ['Bear', 'Wolf', 'Eagle', 'Fox'];

const commonSpecies = reserve1Animals.filter(animal => reserve2Animals.includes(animal));
console.log(commonSpecies);

//Task 6
let animalNames = ['Lion', 'Tiger', 'Panda'];

for(let i = 0; i < animalNames.length; i++){
    let letters = [];
    for(let e = 0; e < animalNames[i].length; e++){
        letters.push(animalNames[i][e]);
    }
    console.log("Letters in " + animalNames[i] + ": " + letters.join(', '));
}

//Task 7
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
function getPositiveTemperatures(){
    let positiveTemperature = [];
    for(let i = 0; i < temperatures.length; i++){
        if(temperatures[i] > 0){
            positiveTemperature.push(temperatures[i]);
        }
    }
    return positiveTemperature;
}
console.log(getPositiveTemperatures());

//Task 8
let zooAnimals = ['Elephant', 'Giraffe', 'Panda', 'Fox', 'Kangaroo'];
let findFox = zooAnimals.indexOf("Fox");
console.log("Index of Fox: " + findFox);

//Task 9
//let findPenguin = zooAnimals.indexOf("Penguin");
function findingPenguin(){
    if(zooAnimals.indexOf("Penguin") !== -1){
        console.log("Penguin is in the zoo.");
    }else{
        console.log("Penguin is not in the zoo.");
    }
}
findingPenguin();

//Task 10
zooAnimals.splice(1, 1, "Cheetah");
console.log(zooAnimals);

//Task 11
let safariAnimals = ['Zebra', 'Leopard', 'Elephant', 'Gazelle'];
console.log(safariAnimals.sort());

//Task 12
console.log(safariAnimals.sort().reverse());

//Task 13
console.log(safariAnimals.includes("Tiger"));

//Task 14
let attendees = ['John', 'Sarah', 'John', 'Alex', 'John'];

function findingJohn(){
    let JohnIndex = [];
    for(let i = 0; i < attendees.length; i++){
        if(attendees[i] === "John")
            JohnIndex.push(i);
    }
    return JohnIndex;
}

console.log(findingJohn());

//Task 15
let upperCase = [];
upperCase = attendees.map(function(x){
    return x.toUpperCase();
});
console.log(upperCase);

//Task 16
let forestAnimals = ['Deer', 'Bear', 'Wolf'];
let farmAnimals = ['Cow', 'Sheep', 'Goat'];

const combined = forestAnimals.concat(farmAnimals);
console.log(combined);

//Task 17
let birdSpecies = ['Eagle', 'Owl', 'Hawk', 'Sparrow', 'Penguin'];
birdSpecies.shift();
birdSpecies.pop();
console.log(birdSpecies);

//Task 18
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 25, 27)
console.log(numbers);

//Task 19
let price = [5, 10, 15, 20];
let increasePrice = [];

increasePrice = price.map(num => num * 1.10);
console.log(increasePrice);

//Task 20
let words = ['apple', 'banana', 'cherry', 'kiwi', 'strawberry'];
let filtering = words.filter(word => word.length > 5);
console.log(filtering);