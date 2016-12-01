import { Injectable } from '@angular/core';
import { Cart, CartItem } from './cart';
import { Product } from './product';
import { PRODUCTS } from './products.data';

@Injectable()
export class CartService {
    mycart = new Cart();
    constructor() {
        if (this.mycart.items.length == 0) {
            this.mycart.addItem(PRODUCTS[0], 1);
            this.mycart.addItem(PRODUCTS[1], 1);
            this.mycart.addItem(PRODUCTS[2], 2);
        }
    }
    getCart(): Cart {
        return this.mycart;
    }
}