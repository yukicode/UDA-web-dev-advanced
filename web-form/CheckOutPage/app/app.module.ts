//entry point of application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//important components
import { AppComponent } from './app.component';
import { CartComponent } from './cart.component';
import { InfoComponent } from './info.component';
import { ShippingComponent } from './shipping.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        CartComponent,
        InfoComponent,
        ShippingComponent,
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }