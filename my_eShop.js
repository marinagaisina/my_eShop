'use strict';
class GoodsItem {
    constructor(title, img, price) {
        this.title = title;
        this.img = img;
        this.price = price;
    }
    render() {
        return `<div class="goods-item d-flex flex-column rounded-lg bg-light mr-2 ml-2 mb-4 border">
                    <img class="img-fluid mb-auto" src="${this.img}" alt="img">
                    <h3>${this.title}</h3>
                    <div class="d-flex justify-content-between">
                        <p>$${this.price}</p>
                        <button class="addToCart btn btn-warning">Add to cart</button>
                    </div>
                </div>`;
    }
    static floatToFixed = floatNumber =>
        Number.parseFloat(floatNumber).toFixed(2); //округления float чисел до сотых значений после ','

    static remove$ = stringEl =>
        stringEl.replace('$','');       // получение float числа из строки для математич.вычислений (удаление $)
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            {title: 'Shirt', img: 'img/shirt.jpg', price: 150},
            {title: 'Socks', img: 'img/socks.jpg', price: 50},
            {title: 'Jacket', img: 'img/jacket.jpg', price: 350},
            {title: 'Shoes', img: 'img/shoes.jpg', price: 250},
            {title: 'Socks1', img: 'img/socks.jpg', price: 50},
            {title: 'Shirt1', img: 'img/shirt.jpg', price: 150},
        ];
        if (this.goods.length === 0) {
            return this.goods = [DEFAULT_PRODUCT];  //если с сервера ничего не пришло, то выводим продукт по умолчанию
        }
    }
    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.img, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }
}

class CartItem extends GoodsItem {
    constructor(title, img, price) {
        super(title, img, price);
        this.quantity = 1;
        this.totalPrice = this.price;
    }
    render(index) {
        return `<tr class="cart-item">
                    <td>${index+1}</td>
                    <td><img class="img-fluid" src="${this.img}" alt="img"></td>
                    <td><h4>${this.title}</h4></td>
                    <td>$${this.price}</td>
                    <td><input type="number" value="${this.quantity}" min="1"></td>
                    <td>$${this.totalPrice}</td>
                    <td><button class="btn btn-light text-secondary">remove</button></td>
                </tr>`;
    }
}

class CartList {
    constructor() {
        this.cartItems = [];
    }
    addToCart(title, img, price) {
        this.cartItems.push(new CartItem(title, img, price));
        cart.clear();
        cart.render();
    }
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
    removeItem = item => {
        // удаление элемента из списка
    }
}



// --------- MAIN -----------------------------------------------------------------------

const DEFAULT_PRODUCT = new GoodsItem('Default Item', 'img/blank.jpg', 0);
const list = new GoodsList();
list.fetchGoods();
const cart = new CartList();

// if (document.addEventListener) {
//     document.addEventListener("click", handleClick, false);
// }
// else if (document.attachEvent) {
//     document.attachEvent("onclick", handleClick);
// }

window.onload = () => {
    list.render();
    document.querySelectorAll('.addToCart').forEach(el => {
        el.addEventListener('click', function (event) {
            let buttonClicked = event.target;
            const goodsItemArr = buttonClicked.parentElement.parentElement.children;
            cart.addToCart(goodsItemArr[1].innerHTML, goodsItemArr[0].src, GoodsItem.remove$(goodsItemArr[2].children[0].innerText));
        });
    });
    cart.render();
    renderProductsList();   //testPage
}