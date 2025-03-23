function buildGroceryList(){
    let groceryItems = prompt("Add grocery items");
    let list = [];

    while(groceryItems !== "done" ){
        list.push (groceryItems);
        groceryItems = prompt("Add another item or type 'done' to finish");
    }
    console.log(list);
}

buildGroceryList();