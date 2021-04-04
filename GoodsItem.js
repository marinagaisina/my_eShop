'use strict';
class GoodsItem {
    constructor(id, name, price) {
        this.id_product = id;
        this.product_name = name;
        //this.img = img;
        this.price = price;
    }
    render() {
        return `<div id="${this.id_product}" class="goods-item d-flex flex-column rounded-lg bg-light mr-2 ml-2 mb-4 border">
                    <!-- <img class="img-fluid mb-auto" src="" alt="img"> -->
                    <h3>${this.product_name}</h3>
                    <div class="d-flex justify-content-between">
                        <p>${this.price}</p>
                        <button class="addToCart btn btn-warning" onclick="cart.addToCart(${this.id_product})">Add to cart</button>
                    </div>
                </div>`;
    }
    static floatToFixed = floatNumber =>
        Number.parseFloat(floatNumber).toFixed(2) //округления float чисел до сотых значений после ','

    static remove$ = stringEl =>
        stringEl.replace('$','')       // получение float числа из строки для математич.вычислений (удаление $)
}