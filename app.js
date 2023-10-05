 const cart = document.querySelector("nav .cart")
 const cartSidebar = document.querySelector(".cart-sidebar ")
 const closeCart = document.querySelector(".close-cart")
//  const burger = document.querySelector(".burger")
const burger = document.querySelector(".burger");
 const menuSidebar = document.querySelector(".menu-sidebar")
 const closeMenu  = document.querySelector(".close-menu")
 const cartItemsTotal = document.querySelector("noi")
 const cartPriceTotal = document.querySelector(".total-amount")
 const cartUI = document.querySelector(".cart-sidebar .cart")
 const totalDiv = document.querySelector(".total-sum")
 const clearBtn = document.querySelector(".clear-cart-btn")
 const cartContent  = document.querySelector(".cart-content")


 let Cart=[];
 let buttonDOM = [];

 cart.addEventListener("click",function(){
    cartSidebar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay")
    setTimeout(function(){
        document.querySelector("body").append(bodyOverlay)
    },300)
})

 closeCart.addEventListener("click",function(){
    cartSidebar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
    
})

burger.addEventListener("click",function(){
    menuSidebar.style.transform="translate(0%)"
})
// closeMenu.addEventListener("click",function(){
//     menuSidebar.style.transform="translate(-100%)"
// })

burger.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(0%)";
});

closeMenu.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(-100%)";
});


class Product{
  async getProduct(){
    const response = await fetch("Product.json")
   const data = await response.json();
    let Product = data.items;
    Product = Product.map(items=>{
        const{title,price} = item.fields;
        const{id} = item.sys;
        const image = item.fields.image.fields.file.url;
        return {title,price,image};
    })
    return Product;
  } 

}

// class UI{
//     displayProducts(Product){
//         let result = " ";
//         Product.forEach(Product=>{
//             const m = document.createElement("div")
//             ProductDiv.innerHTML ='< div class = "product-cart">
//                                     <img src ="${Product.image}" alt ="Product"></img>
//                                     <span class = "add-to-cart" data-id="${Product.id}">
//                                     <i class = "fa fa-cart--plus fa-1x"
//                                     style = "margin-right : 0.1em; font-size: 1em;">
//                                     </i>
//                                     Add to cart </span>
//                                     <div class ="Product-name">${Product.title}</div>
//                                     <div class= "Product-price">$ ${Product.price}</div></div>'
//             const p = document.querySelector(".product")
//             p.append(ProductDiv)                        

//         })

//     }
// }

class UI {
    displayProducts(products) {
      let result = " ";
      products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
          <div class="product-cart">
            <img src="${product.image}" alt="Product">
            <span class="add-to-cart" data-id="${product.id}">
              <i class="fa fa-cart-plus fa-1x" style="margin-right: 0.1em; font-size: 1em;"></i>
              Add to cart
            </span>
            <div class="product-name">${product.title}</div>
            <div class="product-price">$ ${product.price}</div>
          </div>
        `;
        const p = document.querySelector(".product");
        p.append(productDiv);
      });
    } 
    getButtons(){
    const btns = document.querySelectorAll(".add-to-cart")
    buttonDOM = btns;
    btns.forEach((btn) => {
        let inCart = cart.find((item) => item.id===id);
        if(inCart){
            btn.innerHTML = "In Cart"
            btn.dissabled = true
        }
        btn.addEventListener("click",(e)=>{
            e.currentTarget.innerHTML = "In Cart"
            e.currentTarget.style.color = "white"
            e.currentTarget.style.pointerEvents = "none"
            let cartItem = {...Storage.getStorageProducts(id),'amount': 1}
            cart.push(cartItem)
            Storage.saveCart(cart)
            this.setCartValues(cart)
            this.addCartItems(CartItem)
        })
    })
}
setCartValues(cart){
    let tempTotal = 0;
    let itemTotal = 0;
    Cart.map((item)=>{
        tempTotal  += (item.price*item.amount);
        itemTotal += item.amount;
        parseFloat(tempTotal.toFixed (2))
    })
    cartItemsTotal.innerHTML = itemTotal
    cartItemsTotal.innerHTML = parseFloat(tempTotal.toFixed(2))
}        
addCartItem(CartItem){
    let cartItemUi = document.createElement("div")
    cartItemUi.innerHTML = `<div class = "cart-product">
                            <div class = "product-image"
                            <img src = "${cartItem.image} alt ="product"
                            </div>
                            <div class ="cart-product-content">
                            <div class ="cart-product-name"><h3>${cartItem.title}
                            </h3></div>
                            <div class = "cart-product-price"><h3>₹${cartItem.price}
                            </h3>
                            </div>
                            <div class ="cart-product-remove data-id="${cartItem.id}"
                            href = "#" style="color:red;">remove</a></div>
                            </div>
                            <div class ="plus-minus">
                            <i class = "fa fa-angle-left add-amount"
                            data-id="${cartItem.id}"></i>
                            <span class"no-of-items">${cartItem.amount}</spam>
                            data-id="${cartItem.id}"</i>
                            </div>
                            </div>`
                            cartContent.append(cartItemUi)
               }              
      setupApp(){
        cart = storage.getCart()
        this.setCartValues(cart)
        cart.map((item)=>{
          this.addCartItem(item)
        })
      }
      cartLogic(){
        clearBtn.addEventListener("click",()=>{
          this.closeCart()
        })
        cartContent.addEventListener("click",(Event)=>{
          if(Event.target.classList.contains("cart-product-remove")){
            let id = Event.target.dataset.id
            this.removeItem(id)
            let div = Event.target.parentElement.parentElement.parentElement.parentElement
            div.removeChild(Event.target.parentElement.parentElement.parentElement.parentElement)
          
          }
          else if (Event.target.classList.contains("add-amount")){
            let id = Event.target.dataset.id
            let item = cart.find((item)=>item.id===id)
            item.amount++
            storage.saveCart(cart)
            this.setCartValues(cart)
            Event.target.nextElementSbiling.innerHTML = item.amount
          }
          else if (Event.target.classList.contains(reduce-amount)){
            let id = Event.target.dataset.id
            let item = cart.find((item)=>item.id===id)
          if (item.amount>1)
            item.amount--
          storage.saveCart(cart)
          this.setCartValues(cart)
          Event.target.previousElementSbiling.innerHTML = item.amount

          }
          else{
            this.removeItem(id)
            let div = Event.target.parentElement.parentElement.parentElement.parentElement
            div.removeChild(Event.target.parentElement.parentElement.parentElement.parentElement)
          }
        })


      }


      addAmount(){
        const addBtn = document.querySelectorAll(".add-amount")
        addBtn.forEach((btn)=>{
          btn.addEventListener("click",(Event)=>{
            let id = (Event.currentTarget.dataset.id)
            cart.map((item)=>{
              if(item.id===id){
              item.amount++
              storage.saveCart(cart)
              this.setCartValues(cart)
              const amountUI = Event.currentTarget.parentElement.children[1]
              amountUI.innerHTML = item.amount
              }
            })
          })
        })
      }
}


  
  
 