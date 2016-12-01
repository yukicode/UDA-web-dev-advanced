import {Component, OnInit} from '@angular/core';
import {Info} from './info';
import {InfoService} from './info.service';
import {Cart} from './cart';
import {CartService} from './cart.service';

@Component({
    moduleId: module.id,
    selector: "my-review",
    templateUrl: "review.component.html",
    styleUrls: ["review.component.css"]
    })

export class ReviewComponent implements OnInit {
    myinfo: Info;
    mycart: Cart;

    constructor (
        private infoService : InfoService,
        private cartService: CartService
    ){}

    ngOnInit(): void {
        this.myinfo = this.infoService.getInfo();
        this.mycart = this.cartService.getCart();
    }

    confirm(): void {
        alert("order confirmed!");
    }
}