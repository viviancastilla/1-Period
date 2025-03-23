const name= document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const form = document.getElementById("form");

function submitting(){
    if(name.value === "" || email.value === ""){
        alert("Please fill in all information")
        event.preventDefault();
    }else{
        alert("Form submitted");
    }
}

form.addEventListener("submit", submitting);
