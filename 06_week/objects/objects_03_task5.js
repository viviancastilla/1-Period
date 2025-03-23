//Task 5
let product = {
    name: "Barilla Pasta",
    price: 3.50,
    quantity: 1
}
function updateDisplay(){
    let totalPrice = product.price * product.quantity;

    let displayProduct = `
    Name: ${product.name}<br>
    Price: €${product.price}<br>
    Quantity: ${product.quantity}<br>
    Total Price: € ${totalPrice}`;

    document.getElementById("objectDisplay").innerHTML = displayProduct;
}


function productAmount(){
    let newQuantity = parseInt(document.getElementById("amount").value);

    if(!isNaN(newQuantity) && newQuantity >= 0){
        product.quantity = newQuantity;
        updateDisplay();
    }else{
    alert ("Enter a valid quantity");
    }
}
updateDisplay();

document.getElementById("amount").addEventListener("input", productAmount);