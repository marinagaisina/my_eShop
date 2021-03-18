'use strict';
const onWindowLoad = () => {
    const goods = [
        {title: 'Shirt', img: 'img/shirt.jpg', price: 150},
        {title: 'Socks', img: 'img/socks.jpg', price: 50},
        {title: 'Jacket', img: 'img/jacket.jpg', price: 350},
        {title: 'Shoes', img: 'img/shoes.jpg', price: 250},
        {title: 'Socks1', img: 'img/socks.jpg', price: 50},
        {title: 'Shirt1', img: 'img/shirt.jpg', price: 150},
    ];

    const renderGoodsItem = ({ img, title, price }) =>
        `<div class="goods-item d-flex flex-column rounded-lg bg-light mr-2 ml-2 mb-4 border">
                <img class="img-fluid mb-auto" src="${img}" alt="img">
                <div class="d-flex justify-content-between">
                    <h3>${title}</h3><p>$${price}</p>
                    <button class="btn btn-warning">Add to cart</button>
                </div>
         </div>`;

    const renderGoodsList = (list = []) =>
        document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join("");

    renderGoodsList(goods);  //вызов функции с параметром по умолчанию
}
window.onload = onWindowLoad;