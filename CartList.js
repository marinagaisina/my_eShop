'use strict';

class CartList {
    constructor() {
        this.cartItems = [];
        this.total = 0;
        this.tax = 0;
        this.totalWithTax = 0;
    }
    addToCart(id) {
        let item = GoodsList.hasItem(list.goods, id);
        if (GoodsList.hasItem(this.cartItems, id) == null && item != null) {
            this.cartItems.push(new CartItem(item.id_product,item.product_name, item.price));
            alert(item.product_name+' added to your cart!');
            this.clear();
            this.render();
            return true;
        } else {
            alert(item.product_name+' is already in your cart');
            return false;
        }

        //const buttonClicked = event.target;
        //document.querySelectorAll('.goods-item').forEach(item => {
        //     if (item.id === buttonClicked.parentElement.parentElement.id);
        // });
        // const goodsItemArr = buttonClicked.parentElement.parentElement.children;
        // cart.cartItems.push(new CartItem(goodsItemArr[1].innerHTML, goodsItemArr[0].src, GoodsItem.remove$(goodsItemArr[2].children[0].innerText)));
    }

    // подсчет общей суммы покупок в корзине
    calculateTotal() {
        let total = (sum, element) => {
            return sum + element.totalPrice;
        }
        let sumBeforeTax = GoodsItem.floatToFixed(this.cartItems.reduce(total,0));
        let tax = GoodsItem.floatToFixed(sumBeforeTax*0.07);
        let sumWithTax = GoodsItem.floatToFixed(sumBeforeTax*1.07);
        this.total = sumBeforeTax;
        this.tax = tax;
        this.totalWithTax = sumWithTax;
    }
    render() {
        let listHTML = '';
        this.cartItems.forEach((item, index) => {
            listHTML += item.render(index);
        });
        this.calculateTotal();
        listHTML += `<tr>
                        <td colspan="5" class="text-right border-bottom-0"><h4>TOTAL:</h4></td>
                        <td colspan="2" class="border-bottom-0"><h4>${this.total}</h4></td>
                     </tr>
                     <tr>
                        <td colspan="5" class="text-right border-0">FEDERAL TAX (7%):</td>
                        <td colspan="2" class="border-0">${this.tax}</td>
                     </tr>
                     <tr>
                     <tr>
                        <td colspan="5" class="text-right border-0">TOTAL with tax:</td>
                        <td colspan="2" class="border-0">${this.totalWithTax}</td>
                     </tr>`;
        document.querySelector('tbody').insertAdjacentHTML('beforeend', listHTML);
    }
    clear() {
        document.querySelector('tbody').innerHTML = '';
    }

   //удаление элемента из корзины
    removeItem = id => {
        this.cartItems = this.cartItems.filter(item => item.id_product !== id);
        this.clear();
        this.render();

        // for (let i=0;i<this.cartItems.length;i++) {
        //     if (this.cartItems[i].id_product === id) {
        //         this.cartItems.splice(i, 1);    //сделать с помощью filter!!
        //         this.clear();
        //         this.render();
        //         return;
        //     }
        // }
    }

    purchase = () => {

    }

    // изменение кол-ва товара в корзине
    updateQuantity = (input, id) => {
        const newValue = input.value;
        const elInCart = GoodsList.hasItem(this.cartItems, id);
        elInCart.quantity = newValue;
        elInCart.totalPrice = elInCart.price*newValue;
        this.clear();
        this.render();
        // for (let i=0;i<this.cartItems.length;i++) {
        //     if (this.cartItems[i].id_product === id) {
        //         const elInCart = this.cartItems[i];
        //         return; //- из-за return, если в корзине два или более одинкавых продукта, то количество можно поменять только у первого
        //     }
        // }
    }
}