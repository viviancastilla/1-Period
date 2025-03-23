//Async wait
async function fetchData(){
    try{
        const response = await fetch("https://api.xample.com/data");
        const dara = await response.json();
        crosole.log(data);
    }catch(error){
        console.error("Error:", error);
    }
}

//Handling promises
fetch("https:/api.example.com/data")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error))

// Fetch API 
fetch("https://jsonplaceholder.typi.code.con/posts")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    console.error("Error", error);
});

//Error handling
async function fetchDataWithErrorHnadling(){
    try{
        const response = await fetch("https://api.example.com/data");
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("Fetch error:", error);
    }
}