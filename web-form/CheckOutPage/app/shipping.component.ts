import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cart } from './cart';
import { CartService } from './cart.service';

@Component({
    moduleId: module.id,
    selector: 'my-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css'],
})

export class ShippingComponent implements OnInit {
    mycart: Cart;
    constructor (
        private cartService: CartService
    ){}

    ngOnInit(): void {
        this.mycart = this.cartService.getCart();
    }
}