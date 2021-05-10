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
        <h2 class="productName">${product.name}</h2>
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

// let button = document.getElementById('clearAll');

// button.addEventListener('click',(event)=>{
//     if(event.target.classList.contains('clear')){
//         window.localStorage.clear();

//     }else 
// });


//   function subTotal() {}
// window.localStorage.clear();


//What form code needs: 5.3.2021 8:30 PM
              //Add event listener to Form. Submit action is what we'll be listening to
              //In the function, prevent default, go ahead and do what we want to do 
              //JS to create an element and add it to the page to create an overlay for our receipt
                
              const formData = document.getElementById('userData');
              //const modal = document.getElementById('popupReceipt'); //to select
              formData.addEventListener('submit',(event)=> { 
                  event.preventDefault()
              //    modal.style.display = "none"
                  let link = document.getElementById('shopLink');
                  link.classList.toggle('hide')
              })
             
            

            let myRadios = document.querySelectorAll("input[type=radio]")
              let cardFields = document.querySelector(".card-form")
              let cashFields = document.querySelector(".cash-form")
            let radios = document.querySelector(".radios")
              radios.addEventListener("click", (e) => {
                console.log(e)
                if(e.target.value === "cash"){
                    cardFields.classList.add("no-show")
                    cashFields.classList.remove("no-show")
                   //cardFields.classList.toggle("no-show")
                }
                   if(e.target.value === "credit"){
                    cashFields.classList.add("no-show")
                    cardFields.classList.remove("no-show")
                }
              })
              //Second Radio Button idea test //
            //   const rad = document.myForm.myRadios;
            //   const prev = null;
              for (var i = 0; i < myRadios.length; i++) {
                  myRadios[i].addEventListener('change', function(event) {
                    //   (prev) ? console.log(prev.value): null;
                    //   if (this !== prev) {
                    //       prev = this;
                    //   }
                    //   console.log(this.value)
                  });
              }


              // let changeDue = document.querySelector("#changeDue");
              let changeBack = document.querySelector("#changeDue");
              let changeDueButton = document.getElementById("calculateChangedue")
              let cashTendered = document.getElementById("cashin").value;
              let total = document.getElementById("grandtotal").value;


              changeDueButton.addEventListener("click", (e) => {
                // let cart = localStorage.getItem('cart') ?
                // JSON.parse(localStorage.getItem('cart')): 
                // [];
                
                amountDue = total - cashTendered;
                changeBack.innerText = "$" + amountDue;
                
                // if(balance < 0) {
                //     remainingBalance.classList.remove("green");
                //     remainingBalance.classList.add("red");
                // } else {
                //     remainingBalance.classList.remove("red");
                //     remainingBalance.classList.add("green");
                // }
                return changeBack;
              })


              
              
              //Initial Radio Button idea test //
              
              // if (document.getElementById('idOfRadioButton1').checked) {
              //     creditCard= document.getElementById('idOfRadioButton1').value;
              //    }
              // if (document.getElementById('idOfRadioButton1').checked) {
              //  creditCard= document.getElementById('idOfRadioButton1').value;
              // }
              
              
              // Get the modal
              const modal = document.getElementById('popupReceipt');
              
              // Get the button that opens the modal
              const btn = document.getElementById("submit");
              
              // Get the <span> element that closes the modal
              const span = document.getElementsByClassName("close")[0];
              
              // When the user clicks the button, open the modal 
              btn.addEventListener("click", (e) => {
                console.log("Button was clicked.");
                modal.style.display = "block";

                let products = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')): 
                [];
                console.log(products);
            
                for(let product of products){
                    createReceipt(product);
                }
                // runningTotal(); 
                // cart.total = 0
                // cart.rows = []
                // e.preventDefault()
                // localStorage.clear();
                // btn.localStorage.clear();
 
              });

              // document.getElementById("submit").onclick = clear_me;

              // function clear_me(event) {
              //   event.preventDefault()
              //   localStorage.clear();
              // // checkStorage();
              // }

              function createReceipt(product) {    

                let item = `<div id="cartListing">
                <a href=""><img src="${product.image}" class="cartImage"></a>
                <div id="cartOverview">
                    <div id="cartDetails">
                        <h3 class="category">${product.category}</h3>
                        <h2 class="productName">${product.name}</h2>
                    </div>
                        <h2 id="price" name="price">$${product.price}</h2>
                </div>`
                document.getElementById("cartReceipt").innerHTML+=item

                let cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')): 
                [];
                let price = document.getElementsByName("price");
                let total = 0;
                for (let i = 0; i < cart.length; i++) {
                total += parseInt(cart[i].price);
                }
                // document.getElementById("total").innerHTML = total;
                let subTotal = document.getElementById('subtotal').value;      
                let totalTax = document.getElementById('taxes').value;      
                let grandTotal = document.getElementById('grandtotal').value;

                document.getElementById('receiptSubtotal').innerHTML="Sub-total: $"+subTotal;
                document.getElementById('receiptTaxes').innerHTML="Taxes: $"+totalTax;
                document.getElementById('receiptGrandtotal').innerHTML="Grand-total: $"+grandTotal;

                }


              //   let item = `<div id="cartListing">
              // <a href=""><img src="${product.image}" class="cartImage"></a>
              // <div id="cartOverview">
              //     <div id="cartDetails">
              //         <h3 class="category">${product.category}</h3>
              //         <h2>${product.name}</h2>
              //     </div>
              //         <h2 id="price" name="price">$${product.price}</h2>
              // </div>`
              // document.getElementById("modalResults").innerHTML+=item

             // btn.onclick = function() {
               //   console.log("Button was clicked.");
                //modal.style.display = "block";
            //  }

            // function createModalDiv(product) {    

            //   let item = `<div id="cartListing">
            //   <a href=""><img src="${product.image}" class="cartImage"></a>
            //   <div id="cartOverview">
            //       <div id="cartDetails">
            //           <h3 class="category">${product.category}</h3>
            //           <h2>${product.name}</h2>
            //       </div>
            //           <h2 id="price" name="price">$${product.price}</h2>
            //   </div>`
            //   document.getElementById("modal-content").innerHTML+=item
            //   }
            //   createModalDiv();

              
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                modal.style.display = "none";
              }
              
              // When the user clicks anywhere outside of the modal, close it
              window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }