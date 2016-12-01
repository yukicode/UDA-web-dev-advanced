import { Component, OnInit } from '@angular/core';
import { Info } from './info';
import { InfoService } from './info.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css'],
})

export class InfoComponent implements OnInit {
    myInfo: Info;
    constructor(
        private router: Router,
        private infoService: InfoService
    ) { }

    ngOnInit(): void {
        this.myInfo = this.infoService.getInfo();
    }

    submitForm = function () {
        this.myInfo.getIssues();
        if (this.myInfo.isValid) {
            this.router.navigate(['./shipping']);
        }
    };
    checkNumber = function () {
        if (this.myInfo.cardNumber) {
            this.myInfo.cardNumber = this.myInfo.cardNumber.replace(/[^0-9]/g, '');
        }
    };
}