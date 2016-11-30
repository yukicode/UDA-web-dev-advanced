import { Component } from '@angular/core';
import { Info } from './info';

@Component({
    moduleId: module.id,
    selector: 'my-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css'],
})

export class InfoComponent {
    myInfo = new Info();
    submitForm = function () {
        this.myInfo.getIssues();
    };
    checkNumber = function () {
        if (this.myInfo.cardNumber) {
            this.myInfo.cardNumber = this.myInfo.cardNumber.replace(/[^0-9]/g, '');
        }
    };
}