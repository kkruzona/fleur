let products = localStorage.getItem('cart') ?
              JSON.parse(localStorage.getItem('cart')): 
              [];
              console.log(products);

