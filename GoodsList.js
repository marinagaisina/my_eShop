'use strict';

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods(cb) {
        // this.goods = [
        //     {id: 123, title: 'Shirt', img: 'img/shirt.jpg', price: 150},
        //     {id: 124, title: 'Socks', img: 'img/socks.jpg', price: 50},
        //     {id: 125, title: 'Jacket', img: 'img/jacket.jpg', price: 350},
        //     {id: 126, title: 'Shoes', img: 'img/shoes.jpg', price: 250},
        //     {id: 127, title: 'Socks1', img: 'img/socks.jpg', price: 50},
        //     {id: 128, title: 'Shirt1', img: 'img/shirt.jpg', price: 150},
        // ];
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) =>{
            this.goods = JSON.parse(goods);
            cb();
        })
    }
    render(cart, place) {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHTML += goodItem.render(cart);
        });
        document.querySelector(place).innerHTML = listHTML;
    }
}