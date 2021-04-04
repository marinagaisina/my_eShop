'use strict';
const url1 = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

const DEFAULT_PRODUCT = new GoodsItem(0, 'Default Item', 0);
const list = new GoodsList();
const cart = new CartList();




window.onload = () => {
    list.fetchGoods(url1);
    cart.render();
    
// Get the modal
    let cartModalWindow = document.getElementById("cartModalWindow");

// Get the cart button
    let cartBtn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
    cartBtn.onclick = function() {
        cartModalWindow.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        cartModalWindow.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === cartModalWindow) {
            cartModalWindow.style.display = "none";
        }
    }
// filter Goods
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    searchBtn.addEventListener('click', (e) => {
        const value = searchInput.value;
        list.filterGoods(value);
    })
    searchInput.addEventListener('change', (e) => {
        const value = searchInput.value;
        list.filterGoods(value);
    })
}

//  USING fetch() API: (WORKS TOO!!!)

// fetch(url1)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         list.goods = data;
//         list.render();
//     });


// if (document.addEventListener) {
//     document.addEventListener("click", handleClick, false);
// }
// else if (document.attachEvent) {
//     document.attachEvent("onclick", handleClick);
// }

// document.getElementsByTagName('input').forEach(el => {
//     el.addEventListener('onChange', cart.updateQuantity);
// });
// const inputs = document.getElementsByTagName('input');
// for (let i=0;i<inputs.length;i++) {
//     inputs[i].addEventListener('number', cart.updateQuantity);
// }