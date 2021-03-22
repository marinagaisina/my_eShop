'use strict';

class CartItem extends GoodsItem {
    constructor(id, title, img, price) {
        super(id, title, img, price);
        this.quantity = 1;
        this.totalPrice = this.price;
    }
    render(index) {
        const cartItemId = cart.cartItems[index].id;
        return `<tr class="cart-item">
                    <td>${index+1}</td>
                    <td><img class="img-fluid" src="${this.img}" alt="img"></td>
                    <td><h4>${this.title}</h4></td>
                    <td>$${this.price}</td>
                    <td><input type="number" onchange="cart.updateQuantity(this, ${cartItemId})" value="${this.quantity}" min="1"></td>
                    <td>$${this.totalPrice}</td>
                    <td><button class="removeBtn btn btn-light text-secondary" onclick="cart.removeItem(${cartItemId})">remove</button></td>
                </tr>`;
    }
}