import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './products.data';
import { CartItem, Cart } from './cart';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    mycart = new Cart();
    ngOnInit(): void {
        this.mycart.addItem(PRODUCTS[0], 1);
        this.mycart.addItem(PRODUCTS[1], 1);
        this.mycart.addItem(PRODUCTS[2], 2);
    }

    title = 'Tour of Heroes';
}