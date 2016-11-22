import { Component } from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './products.data';

@Component({
    moduleId: module.id,
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})

export class CartComponent {
    products = PRODUCTS;
    getTotal(): number {
        var total = 0;
        PRODUCTS.forEach(function(p){
            total += p.count * p.price;
        })
        return total;
    }
}