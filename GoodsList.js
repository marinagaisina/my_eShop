'use strict';

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods(url) {
        // this.goods = [
        //     {id: 123, title: 'Shirt', img: 'img/shirt.jpg', price: 150},
        //     {id: 124, title: 'Socks', img: 'img/socks.jpg', price: 50},
        //     {id: 125, title: 'Jacket', img: 'img/jacket.jpg', price: 350},
        //     {id: 126, title: 'Shoes', img: 'img/shoes.jpg', price: 250},
        //     {id: 127, title: 'Socks1', img: 'img/socks.jpg', price: 50},
        //     {id: 128, title: 'Shirt1', img: 'img/shirt.jpg', price: 150},
        // ];

        makeGETRequest('GET',url)
            .then((data) => {
                console.log('ok', data);
                this.goods = data;
                list.render();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }
}