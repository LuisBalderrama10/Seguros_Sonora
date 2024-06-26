import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';



import { LabsComponent } from './modules/main/pages/Dashboard/labs.component';
import { Pag2Component } from './modules/main/pages/Vehiculos/pag2.component';
import { AseguradoraComponent } from './modules/main/pages/Catalogos/aseguradora/aseguradora.component'
import { FabAeronavesComponent } from './modules/main/pages/Catalogos/fab-aeronaves/fab-aeronaves.component'
import { MarVehiculosComponent } from './modules/main/pages/Catalogos/mar-vehiculos/mar-vehiculos.component'
import { NivBlindajeComponent } from './modules/main/pages/Catalogos/niv-blindaje/niv-blindaje.component'
import { RamPolizasComponent } from './modules/main/pages/Catalogos/ram-polizas/ram-polizas.component'
import { TipoAeronaveComponent } from './modules/main/pages/Catalogos/tipo-aeronave/tipo-aeronave.component'
import { TipoDocumentComponent } from './modules/main/pages/Catalogos/tipo-document/tipo-document.component'
import { TipoVehiculoComponent } from './modules/main/pages/Catalogos/tipo-vehiculo/tipo-vehiculo.component'

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
    {
        path: 'Aseguradoras',
        component: AseguradoraComponent
    },
    {
        path: 'FabricantesdeAeronaves',
        component: FabAeronavesComponent
    },
    {
        path: 'MarcasdeVehiculos',
        component: MarVehiculosComponent
    },
    {
        path: 'NivelesdeBlindaje',
        component: NivBlindajeComponent
    },
    {
        path: 'RamosdePóliza',
        component: RamPolizasComponent
    },
    {
        path: 'TiposdeAeronave',
        component: TipoAeronaveComponent
    },
    {
        path: 'TiposdeDocumentos',
        component: TipoDocumentComponent
    },
    {
        path: 'TiposdeVehículos',
        component: TipoVehiculoComponent
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }