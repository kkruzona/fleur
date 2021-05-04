let products = [
    {
        name:'Aloe Plant', 
        price: 13.50,
    },
    {
        name:'Cactus Plant', 
        price: 12.95,
    },
    {
        name:"Designer's Choice Bouquet", 
        price: 29.99,
    },
    {
        name:'Eucalyptus Bundle', 
        price: 14.99,
    },
    {
        name:'Lilies', 
        price: 18.99,
    },
    {
        name:'Orchids', 
        price: 24.99,
    },
    {
        name:'Peonies', 
        price: 16.95,
    },
    {
        name:'Rose Bouquet', 
        price: 39.99,
    },
    {
        name:'Succulent Planter', 
        price: 45.99,
    },
    {
        name:'Sunflower Bouquet', 
        price: 18.99,
    },
] 
cartFromStorage=[];

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