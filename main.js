let totalPrice = 5;

//Price banner
function updatedTotalPrice(){
    totalPrice = parseFloat(document.getElementById("type").selectedOptions[0].dataset.price);

    //topping price
    let toppings = document.querySelectorAll(".topping")
    for(let i = 0; i < toppings.length; i++) {
        if(toppings[i].checked){
            totalPrice = parseFloat(toppings[i].dataset.price) + totalPrice;
        }
    }

    //extras price
    let extras = document.querySelectorAll(".extra")
    for(let i = 0; i < extras.length; i++){
        if(extras[i].checked){
            totalPrice = parseFloat(extras[i].dataset.price) + totalPrice;
        }
    }
       
    //delivery price
    let selectedDelivery = document.querySelector("input[name='delivery']:checked");
    if(selectedDelivery){
        totalPrice = parseFloat(selectedDelivery.dataset.price) + totalPrice;
    }

    //update displayed price
    document.getElementById("totalPriceDisplay").textContent = totalPrice + "€";
}


//eventListener for options
document.addEventListener("DOMContentLoaded", function() {
    let pancakeTypeSelect = document.getElementById("type");
    let toppingCheckboxes = document.querySelectorAll(".topping");
    let extraCheckboxes = document.querySelectorAll(".extra");
    let deliveryOption = document.querySelectorAll(".delivery");

    pancakeTypeSelect.addEventListener("change", updatedTotalPrice);

    for(let i = 0; i < toppingCheckboxes.length; i++){
        toppingCheckboxes[i].addEventListener("change", updatedTotalPrice);
    }
    for(let i = 0; i < extraCheckboxes.length; i++){
        extraCheckboxes[i].addEventListener("change", updatedTotalPrice);
    }
    for(let i = 0; i < deliveryOption.length; i++){
        deliveryOption[i].addEventListener("change", updatedTotalPrice);
    }
    updatedTotalPrice();
});

//Where we will store the order object for the cheff
let orders = [];

//Local sotrage to save the data when refreshing the page
function saveOrders(){
    localStorage.setItem("orders", JSON.stringify(orders));
}

function loadOrders(){
    let storedOrders = localStorage.getItem("orders");
     if(storedOrders){
        orders = JSON.parse(storedOrders);
     }
}
document.addEventListener("DOMContentLoaded", function(){
    loadOrders();
});

//Making the orderId to identify the order for the cheff, adding the orders
let orderId = localStorage.getItem("orderId") ? parseInt(localStorage.getItem("orderId")) : 0;

function addOrder(orderDetails){
    updatedTotalPrice(); //Makes sure totalPrice is updated before saving it

    orderDetails.totalPrice = totalPrice; //Save the updated total price in orderDetails

    //Assign an ordr ID and save the order
    orderDetails.orderId = orderId; 
    orders.push(orderDetails);
    orderId++;

    //Save order ID and orders to local storage
    localStorage.setItem("orderId", orderId);
    saveOrders();
}

//Final order button
document.getElementById("seeOrder").addEventListener("click", function(){
    let order = [];

    //customer name
    let customer = document.getElementById("customerName").value;
    order.push("Name: " + customer);

    //selected pancake
    let selectedPancake = document.getElementById("type").selectedOptions[0].textContent;
    order.push("Pancake: " + selectedPancake);
    
    // selected toppings
    let toppings = document.querySelectorAll(".topping:checked");
    let toppingList = [];
    for(let i = 0; i < toppings.length; i++){
        toppingList.push(toppings[i].value);
        order.push("Topping: " + toppings[i].value);
    }
    // selected extras
    let extras = document.querySelectorAll(".extra:checked");
    let extraList = [];
    for(let i = 0; i < extras.length; i++){
        extraList.push(extras[i].value);
        order.push("Extra: " + extras[i].value);
    }

    //selected delivery
    let delivery = document.querySelector("input[name='delivery']:checked");

    if(!delivery){
        alert("Plese select a delivery option,");
        return;
    }else{
        order.push("Delivery: " + delivery.value);
    }

    updatedTotalPrice();
    order.push("Total price: " + totalPrice + "€");
   //display order
    if(order.length > 0){
        document.getElementById("summaryText").innerHTML = "Selected:<br>" + order.join("<br>");
    }else{
        document.getElementById("summaryText").innerText = "No items selected.";
    }

    //Sending the order to the chef by making an object
    let orderDetails ={
        orderId: orderId,
        customerName: customer,
        selectedPancake: selectedPancake,
        toppings: toppingList.length > 0 ? toppingList : ["None"],
        extras: extraList.length > 0 ? extraList : ["None"],
        deliveryMethod: delivery.value,
        totalPrice: totalPrice + "€",
        status: "waiting"
    };

    addOrder(orderDetails);

    //displayOrder();
});  

//Button to go to the allorders.html page
document.getElementById("allOrders").addEventListener("click", function(){
    window.location.href = "allOrders.html";
});

document.getElementById("submit").addEventListener("click", function(){
    saveOrders();
    window.location.href = "allOrders.html"
});