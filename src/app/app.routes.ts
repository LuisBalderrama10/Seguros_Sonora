import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';



import { LabsComponent } from './modules/main/pages/Dashboard/labs.component';
import { Pag2Component } from './modules/main/pages/Vehiculos/pag2.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {
        path: '',
        component: LabsComponent
    },
    {
        path: 'prueba',
        component: Pag2Component
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }