//entry point of application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//important components
import { AppComponent } from './app.component';
import { CartComponent } from './cart.component';
import { InfoComponent } from './info.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        CartComponent,
        InfoComponent,
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }