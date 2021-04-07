'use strict';

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
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
        //alert('fetch');
        makeGETRequest('GET',url)
            .then((data) => {
                this.goods = JSON.parse(data);
                this.filteredGoods = JSON.parse(data);
                console.log('ok', data);
            })
            .catch((err) => {   //если с сервера данные не загружены, подставляем массив продуктов по умолчанию
                console.log(err);
                this.goods = [DEFAULT_PRODUCT];
                this.filteredGoods = [DEFAULT_PRODUCT];
            })
            .finally(()=> {
                list.render();
            })
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter( good => regexp.test(good.product_name));
        this.render();
    }

    render() {
        //alert('render');
        let listHTML = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }

    //поиск id элемента в переданном списке
    static hasItem = (list, id) => {
        for (let i=0;i<list.length;i++) {
            if (list[i].id_product === id) {
                return list[i];
            }
        }
        return null;
    }
}