'use strict';
// --------- MAIN -----------------------------------------------------------------------

const DEFAULT_PRODUCT = new GoodsItem(0, 'Default Item', 0);
const list1 = new GoodsList();
const list2 = new GoodsList();
const cart1 = new CartList();
const cart2 = new CartList();

// if (document.addEventListener) {
//     document.addEventListener("click", handleClick, false);
// }
// else if (document.attachEvent) {
//     document.attachEvent("onclick", handleClick);
// }

window.onload = () => {
   // list1.fetch();//!!!!!!!!!!
    list2.fetchGoods(() => {
        list2.render(cart2,'.products-list');
    });
    cart2.render('#cart2 tbody');
    // document.getElementsByTagName('input').forEach(el => {
    //     el.addEventListener('onChange', cart.updateQuantity);
    // });
    // const inputs = document.getElementsByTagName('input');
    // for (let i=0;i<inputs.length;i++) {
    //     inputs[i].addEventListener('number', cart.updateQuantity);
    // }
}