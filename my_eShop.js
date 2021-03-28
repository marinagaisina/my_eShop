'use strict';
// --------- MAIN -----------------------------------------------------------------------

const DEFAULT_PRODUCT = new GoodsItem(0, 'Default Item', 0);
const list = new GoodsList();
const cart = new CartList();

// if (document.addEventListener) {
//     document.addEventListener("click", handleClick, false);
// }
// else if (document.attachEvent) {
//     document.attachEvent("onclick", handleClick);
// }

window.onload = () => {
    list.fetchGoods(() => {
        list.render();
    });
    cart.render();
    // document.getElementsByTagName('input').forEach(el => {
    //     el.addEventListener('onChange', cart.updateQuantity);
    // });
    // const inputs = document.getElementsByTagName('input');
    // for (let i=0;i<inputs.length;i++) {
    //     inputs[i].addEventListener('number', cart.updateQuantity);
    // }
}