 const cart = document.querySelector("nav .cart")
 const cartSidebar = document.querySelector(".cart-sidebar ")
 const closeCart = document.querySelector(".close-cart")
 const burger = document.querySelector(".burger")
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