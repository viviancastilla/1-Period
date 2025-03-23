function Task(title, description, completed){
    this.title = title;
    this.description = description;
    this.completed = completed;
}

let taskArr = [];

function taskDisplay(){
    let taskStrg = "";
    taskArr.forEach(tasks => {
        taskStrg = taskStrg + `<p> ${tasks.title}<br>
         ${tasks.description} <br>
         ${tasks.completed}</p`;
    });

    document.getElementById("taskDisplay").innerHTML = taskStrg;
}

function addingTask (){
    let title = prompt("Enter a task title");
    let description = prompt("Enter a task description");
    let completed = prompt("Is the task completed? (y/n)").toLowerCase() === "y";

    let newTask = new Task(title, description, completed);
    taskArr.push(newTask);
    taskDisplay();
}

document.getElementById("newTask").addEventListener("click", addingTask);

