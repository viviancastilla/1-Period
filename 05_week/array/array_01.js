let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Task 1
for(const members of teamMembers){
    console.log(members);
}

// Task 2, 3, 4, 5
teamMembers.shift();
teamMembers.pop();
teamMembers.unshift("Alex");
teamMembers.push("Linda");
console.log(teamMembers);

//Task 6
let exclude = teamMembers.slice(2);
console.log(exclude);

//Task 7, 8
let lookForMike = teamMembers.indexOf("Mike");
let lookForJake = teamMembers.indexOf("Jake");
console.log(lookForMike, lookForJake);

//Task 9
let replace = teamMembers.splice(2, 1, "Carol", "Bruce");
console.log(teamMembers);

//Task 10
let addBob = teamMembers.concat ("Bob");
console.log(addBob);

//Task 11
let copy = teamMembers.slice();
console.log(copy);

//Task 12
let newMembers = ['Tina', 'Dean'];
let combined = teamMembers.concat(newMembers);
console.log(combined);

//Task 13
let findJohn = [];
for(let i = 0; i < teamMembers.length; i++){
    if(teamMembers[i] === 'John'){
        findJohn.push(i);
    }
}
console.log(findJohn);

//Task 14
let upperCase = teamMembers.map(function(str){
   return str.toUpperCase();
});
console.log(upperCase);

//Task 15
let alphabetOrder = [...teamMembers].sort();
console.log(alphabetOrder);

//Task 16
let reversed = [...teamMembers].reverse();
console.log(reversed);

//Task 17
let found = teamMembers.some(function (member){
    return member ==="John";
});
console.log(found);

//Task 18
let checkLength = teamMembers.every(function (member){
    return member.length > 3;
});
console.log(checkLength);
