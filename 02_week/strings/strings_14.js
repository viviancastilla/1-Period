let description = " JavaScript is Fun and powerful! ";
let trim = description.trim();
let lowerCase = trim.toLowerCase();
let checkWord = lowerCase.includes("fun");
let replace = lowerCase.replace("powerful", "amazing");

console.log(`Final description: ${replace}!`);
console.log("Does it include 'fun'? " + checkWord);