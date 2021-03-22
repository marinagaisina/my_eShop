'use strict';

class CartList {
    constructor() {
        this.cartItems = [];
    }
    addToCart(id) {
        cart.clear();   //
        for (let i=0;i<list.goods.length;i++) {     //поиск по "базе данных"
            if (list.goods[i].id === id) {
                let item = list.goods[i];
                cart.cartItems.push(new CartItem(item.id,item.title, item.img, item.price));
            }
        }
        cart.render();
        //const buttonClicked = event.target;
        //document.querySelectorAll('.goods-item').forEach(item => {
        //     if (item.id === buttonClicked.parentElement.parentElement.id);
        // });
        // const goodsItemArr = buttonClicked.parentElement.parentElement.children;
        // cart.cartItems.push(new CartItem(goodsItemArr[1].innerHTML, goodsItemArr[0].src, GoodsItem.remove$(goodsItemArr[2].children[0].innerText)));
    }

    // подсчет общей суммы покупок в корзине
    calculateTotal() {
        let total = 0;
        this.cartItems.forEach(item => total += Number.parseFloat(item.totalPrice));
        return total;
    }
    render() {
        let listHTML = '';
        this.cartItems.forEach((item, index) => {
            listHTML += item.render(index);
        });
        listHTML += `<tr>
                        <td colspan="5" class="text-right border-bottom-0"><h4>TOTAL:</h4></td>
                        <td colspan="2" class="border-bottom-0"><h4>$${GoodsItem.floatToFixed(this.calculateTotal())}</h4></td>
                     </tr>
                     <tr>
                        <td colspan="5" class="text-right border-0">FEDERAL TAX (7%):</td>
                        <td colspan="2" class="border-0">$${GoodsItem.floatToFixed(this.calculateTotal()*0.07)}</td>
                     </tr>
                     <tr>
                     <tr>
                        <td colspan="5" class="text-right border-0">TOTAL with tax:</td>
                        <td colspan="2" class="border-0">$${GoodsItem.floatToFixed(this.calculateTotal()*1.07)}</td>
                     </tr>`;
        document.querySelector('tbody').insertAdjacentHTML('beforeend', listHTML);
    }
    clear() {
        document.querySelector('tbody').innerHTML = '';
    }

   //удаление элемента из корзины
    removeItem = id => {
        for (let i=0;i<this.cartItems.length;i++) {
            if (this.cartItems[i].id === id) {
                this.cartItems.splice(i, 1);
                this.clear();
                this.render();
            }
        }
    }

    purchase = () => {

    }

    // изменение кол-ва товара в корзине
    updateQuantity = (input, id) => {
        const newValue = input.value;
        for (let i=0;i<this.cartItems.length;i++) {
            if (this.cartItems[i].id === id) {
                const elInCart = this.cartItems[i];
                elInCart.totalPrice = elInCart.price*newValue;
                elInCart.quantity = newValue;
                this.clear();
                this.render();
                return;
            }
        }
    }
}