// All orders page

document.addEventListener("DOMContentLoaded", function(){
    let storedOrders = localStorage.getItem("orders");
    let ordersContainer = document.getElementById("order-list");
    let orderTemplate = document.getElementById("orderTemplate");
    let noOrdersMessage = document.getElementById("noOrders");

    //Getting the orders from the local storage
    if (!orderTemplate) return;

    if (storedOrders) {
        let orders = JSON.parse(storedOrders);
        console.log("Loaded orders:", orders);

        ordersContainer.innerHTML = "";

        if (orders.length > 0) {
            noOrdersMessage.classList.add("hidden");

            orders.forEach((order, index) => {
                let orderClone = orderTemplate.cloneNode(true);
                orderClone.classList.add("orderVisible");
                orderClone.removeAttribute("id");

                //Give a number ID to the order
                let orderIdElement = orderClone.querySelector("#orderId");
                console.log(`Order #${index + 1}:`, orderIdElement);

                if (orderIdElement) {
                    orderIdElement.textContent = `Order #${index + 1}`;
                    console.log(`OrderIdElement found for Order #${index + 1}`);
                }

                console.log(`Order Data #${index + 1}:`, order);

                //Getting each ordes details
                orderClone.querySelector("#customerName").textContent = `Name: ${order.customerName || "unknown"}`;
                orderClone.querySelector("#pancake").textContent = `Pancake: ${order.pancake || order.selectedPancake || "none"}`;
                orderClone.querySelector("#toppings").textContent = `Toppings: ${order.toppings?.join(", ") || "none"}`;
                orderClone.querySelector("#extras").textContent = `Extras: ${order.extras?.join(", ") || "none"}`;
                orderClone.querySelector("#delivery").textContent = `Delivery: ${order.deliveryMethod || "not specified"}`;
                orderClone.querySelector("#totalPrice").textContent = `Total price: ${order.totalPrice || "N/A"}`;

                ordersContainer.appendChild(orderClone);
            });
        } else {
            noOrdersMessage.classList.remove("hidden");
        }
    } else {
        noOrdersMessage.classList.remove("hidden");
    }
});





//Status color option
