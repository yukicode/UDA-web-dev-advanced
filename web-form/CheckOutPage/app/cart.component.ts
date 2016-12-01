import { Component, Input } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './products.data';
import { CartItem, Cart } from './cart';

@Component({
    moduleId: module.id,
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})

export class CartComponent {
    _mycart: Cart;
    canEdit = false;
    editingState = "Edit";

    editAmount() : void {
        this.canEdit = !this.canEdit;
        this.editingState = this.canEdit? "Save" : "Edit";
    }

    deleteItem(item: CartItem): void {
        this.mycart.deleteItem(item);
    }

    @Input()
    set mycart(cart: Cart){
        this._mycart = cart;
    }

    get mycart() {
        return this._mycart;
    }
}