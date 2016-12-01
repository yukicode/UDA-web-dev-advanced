import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { ShippingComponent } from './shipping.component';

const routes: Routes = [
    { path: '', redirectTo: '/info', pathMatch: 'full' },
    { path: 'info', component: InfoComponent },
    { path: 'shipping', component: ShippingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }