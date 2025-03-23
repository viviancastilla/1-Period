function createWordPyramid(){
    let word = prompt("Type")

    for(let i = 0; i < word.length; i++){
        console.log(word.slice(0, i +1));
    }  
}

createWordPyramid();