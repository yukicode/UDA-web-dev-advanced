import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './products.data';
import { CartItem, Cart } from './cart';
import { CartService } from './cart.service';

@Component({
    moduleId: module.id,
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
    mycart: Cart;

    constructor(
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        this.mycart = this.cartService.getCart();
    }
    canEdit = false;
    editingState = "Edit";


    editAmount(): void {
        this.canEdit = !this.canEdit;
        this.editingState = this.canEdit ? "Save" : "Edit";
    }

    deleteItem(item: CartItem): void {
        this.mycart.deleteItem(item);
    }
}