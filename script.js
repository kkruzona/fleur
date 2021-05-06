let products = [
    {
        image: "Aloe-Plant.jpg",
        category: "Succulent",
        name:'Aloe Plant', 
        price: 13.95,
    },
    {
        image: "Cactus-Plant.jpg",
        category: "Succulent",
        name:'Cactus Plant', 
        price: 12.95,
    },
    {
        image: "Designers-Choice-Bouquet.jpg",
        category: "Arrangement",
        name:"Designer's Choice", 
        price: 29.99,
    },
    {
        image: "Eucalyptus-Bundle.jpg",
        category: "Single Stem",
        name:'Eucalyptus Bundle', 
        price: 14.99,
    },
    {
        image: "Lilies.jpg",
        category: "Single Stem",
        name:'Lilies', 
        price: 18.99,
    },
    {
        image: "Orchids.jpg",
        category: "House Plant",
        name:'Orchids', 
        price: 24.99,
    },
    {
        image: "Peonies.jpg",
        category: "Single Stem",
        name:'Peonies', 
        price: 16.95,
    },
    {
        image: "Rose-Bouquet.jpg",
        category: "Arrangement",
        name:'Rose Bouquet', 
        price: 39.99,
    },
    {
        image: "Succulent-Planter.jpg",
        category: "Succulent",
        name:'Succulent Planter', 
        price: 45.99,
    },
    {
        image: "Sunflower-Bouquet.jpg",
        category: "Arrangement",
        name:'Sunflower Bouquet', 
        price: 18.99,
    },
] 
let cartFromStorage = localStorage.getItem('cart') ?
              JSON.parse(localStorage.getItem('cart')): 
              [];

let myButtonContainer = document.getElementById('shopItems');

myButtonContainer.addEventListener('click',(event)=>{
    if(event.target.hasAttribute('data-id')){
        let id = event.target.getAttribute('data-id');
        cartFromStorage.push(products[id]);
        console.log(cartFromStorage);
        localStorage.setItem('cart',JSON.stringify(cartFromStorage));
    }else{
        console.log('Button not clicked')
    }
})