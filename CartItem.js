'use strict';

class CartItem extends GoodsItem {
    constructor(id, name, price) {
        super(id, name, price);
        this.quantity = 1;
        this.totalPrice = this.price;
    }
    render(index) {
        const cartItemId = cart.cartItems[index].id_product;
        return `<tr class="cart-item">
                    <td>${index+1}</td>
                    <!-- <td><img class="img-fluid" src="" alt="img"></td> -->
                    <td><h4>${this.product_name}</h4></td>
                    <td>${this.price}</td>
                    <td><input type="number" onchange="cart.updateQuantity(this, ${cartItemId})" value="${this.quantity}" min="1"></td>
                    <td>${this.totalPrice}</td>
                    <td><button class="removeBtn btn btn-light text-secondary" onclick="cart.removeItem(${cartItemId})">remove</button></td>
                </tr>`;
    }

}