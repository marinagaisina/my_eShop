'use strict';
class GoodsItem {
    constructor(id, title, img, price) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.price = price;
    }
    render() {
        return `<div id="${this.id}" class="goods-item d-flex flex-column rounded-lg bg-light mr-2 ml-2 mb-4 border">
                    <img class="img-fluid mb-auto" src="${this.img}" alt="img">
                    <h3>${this.title}</h3>
                    <div class="d-flex justify-content-between">
                        <p>$${this.price}</p>
                        <button class="addToCart btn btn-warning" onclick="cart.addToCart(${this.id})">Add to cart</button>
                    </div>
                </div>`;
    }
    static floatToFixed = floatNumber =>
        Number.parseFloat(floatNumber).toFixed(2) //округления float чисел до сотых значений после ','

    static remove$ = stringEl =>
        stringEl.replace('$','')       // получение float числа из строки для математич.вычислений (удаление $)
}