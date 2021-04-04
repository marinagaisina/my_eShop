'use strict';
const url1 = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

const DEFAULT_PRODUCT = new GoodsItem(0, 'Default Item', 0);
const list = new GoodsList();
const cart = new CartList();

window.onload = () => {
    list.fetchGoods(url1);
    cart.render();
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