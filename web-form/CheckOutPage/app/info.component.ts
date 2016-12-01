import { Component } from '@angular/core';
import { Info } from './info';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css'],
})

export class InfoComponent {
    constructor (
        private router: Router
    ){}

    myInfo = new Info();
    submitForm = function () {
        this.myInfo.getIssues();
        if(this.myInfo.isValid){
            this.router.navigate(['./shipping']);
        }
    };
    checkNumber = function () {
        if (this.myInfo.cardNumber) {
            this.myInfo.cardNumber = this.myInfo.cardNumber.replace(/[^0-9]/g, '');
        }
    };
}