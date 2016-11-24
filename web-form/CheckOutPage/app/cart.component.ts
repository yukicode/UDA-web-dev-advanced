import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './products.data';
import { CartItem, Cart } from './cart';

@Component({
    moduleId: module.id,
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
    mycart = new Cart();
    canEdit = false;
    editingState = "Edit";

    ngOnInit(): void {
        this.mycart.addItem(PRODUCTS[0], 1);
        this.mycart.addItem(PRODUCTS[1], 1);
        this.mycart.addItem(PRODUCTS[2], 2);
    }

    editAmount() : void {
        this.canEdit = !this.canEdit;
        this.editingState = this.canEdit? "Save" : "Edit";
    }

    deleteItem(item: CartItem): void {
        this.mycart.deleteItem(item);
    }
}