/* current animal list */
const animalNames = ["All", "Mammal", "Birds", "Reptile", "Amphibian", "Fish"];

/* clears the current animal list */
document.querySelector('#animalList').innerHTML = "";

/*shows the animal list*/
function displayanimals(){
    animalNames.forEach(function(searchAnimal){
        let animalList = document.createElement('li');
        animalList.textContent = searchAnimal;
        document.querySlecetor('#animalList').appendChild(animalList);
    }) 
}

/* user can add animal to the list */
const addAnimal = () =>{
    const nameInput = document.querySelector('#newAnimalName').value;
    animalNames.push(nameInput);
    displayanimals();
    document.querySelector('#newAnimalName').value ='';
};

/* alphabetical order */
sortAnimalButton.addEventListener('click', sortAnimals);
const sortAnimals = () => {
    animalNames.sort((a,b) =>a.localeCompare(b));
    displayanimals();
}



searchInput.addEventListener('input', searchAnimal);
addAnimalButton.addEventListener('click', addAnimal);


/*function deisplayanimals(){
    animalList.innerHTML ='';
    for(const animal of animalNames){
        const li = document.createElement('li');
        li.textContent = (`${animal}`);
        animalList.appendChild(li);
    }
}*/