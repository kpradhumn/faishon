let carts=document.querySelector('.add-cart');

for(let i=0;i<carts.length;i++){
    carts[i].addEventListner('clicl',() => {
        console.log("added to cart");

    })

}