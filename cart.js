function addToCart() {
    let products = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')): 
    [];
    console.log(products);

    for(let product of products){
        createDiv(product);
    }
}

function createDiv(product) {    

let item = `<div id="cartListing">
<a href=""><img src="${product.image}" class="cartImage"></a>
<div id="cartOverview">
    <div id="cartDetails">
        <h3 class="category">${product.category}</h3>
        <h2>${product.name}</h2>
    </div>
        <h2 id="price" name="price">$${product.price}</h2>
</div>`
document.getElementById("cartResults").innerHTML+=item
}
addToCart();

function runningTotal() {
    // let taxRate = 0.06;
    // let tax = subtotal * taxRate;
    // let total = subtotal + tax;
    let cart = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')): 
    [];
    let price = document.getElementsByName("price");
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += parseInt(cart[i].price);
    }
    // document.getElementById("total").innerHTML = total;
    document.getElementById('subtotal').innerHTML="Sub-total: $"+total.toFixed(2);      
    document.getElementById('taxes').innerHTML="Taxes: $"+(total*.06).toFixed(2);      
    document.getElementById('grandtotal').innerHTML="Grand-total: $"+(total*1.06).toFixed(2);
  }
runningTotal();  


//   function subTotal() {}



// let total = 0;
// let totalSpan = document.getElementById("total");
// function updateTotal(value){
//     total = (total + value);
//     if (total < 0) {
//         total = 0;
//     }
//     totalSpan.innerHTML = total.toFixed(2);
// }
// updateTotal();



// ${product.price}.value


// window.localStorage.clear();
// window.localStorage.removeItem('name');


// var divElement = document.createElement("Div");
// divElement.id = "cartListing";


// // Appending the div element to cart div
// document.getElementsById("cartResults")[0].appendChild(divElement);