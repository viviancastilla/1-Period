//Task 1
function User(username, email){
    this.username = username;
    this.email = email;

    this.showInfo = function(){
        console.log(this.username + " and " + this.email);
    };
}
let user = new User ('vcastilla', 'email@gmail.com');
user.showInfo();


//Task 2
class UserClass{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
        changeEmail(newEmail){
            this.email = newEmail;
            console.log(this.username + " and " + this.email);
        }
}
let user2 = new UserClass(`vcastilla`, `email@gmail.com`);

user2.changeEmail('new.email@gmail.com');

//Task 3
let theme = {
    name: "light",
    isActive: false
}

function colorMode(){
    theme.isActive = !theme.isActive;
    if(theme.isActive){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        console.log("Dark");
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log("Light");
    }
}
document.getElementById("task3").addEventListener("click", colorMode);


