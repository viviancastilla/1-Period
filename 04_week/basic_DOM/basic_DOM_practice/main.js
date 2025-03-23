//monday//
const circle = document.getElementById('alert');
console.log(circle.textContent);

function myFunction(){
    alert('Some cool text inside');
}

function myFunction2(){
    alert('I TOLD YOU TO NOY CLICK THE BUTTON!!');
}

//tuesday//
//insert button//
const handleClick =() => 
 document.getElementById('insertBtn').addEventListener('click', handleClick)

//username//
function displayUsername(){
    const inputValue= document.getElementById("username").value;
    document.getElementById("output").textContent = "User entered: " + inputValue;
}

document.getElementById("submitBtn").addEventListener("click", displayUsername);

const testExample = document.querySelector('p');
const testExample2= documetn.querySelector('.myclass');
const testExample3 = document.querySelector('#mtID');
const testExample4 = document.querySelector('.myclass');

console.log(textExample4[2].textContent);

/*selector
const button = document.getElemetnByID('insertBtn');
const example1 = document.querySelector('#myID');
const example2 = document.querySelector('header p .myclass');
const example3 = document.querySelector('div'); */

document.getElementById()