import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';



import { LabsComponent } from './modules/main/pages/Dashboard/labs.component';
import { AseguradoraComponent } from './modules/main/pages/Catalogos/aseguradora/aseguradora.component'
import { FabAeronavesComponent } from './modules/main/pages/Catalogos/fab-aeronaves/fab-aeronaves.component'
import { MarVehiculosComponent } from './modules/main/pages/Catalogos/mar-vehiculos/mar-vehiculos.component'
import { NivBlindajeComponent } from './modules/main/pages/Catalogos/niv-blindaje/niv-blindaje.component'
import { RamPolizasComponent } from './modules/main/pages/Catalogos/ram-polizas/ram-polizas.component'
import { TipoAeronaveComponent } from './modules/main/pages/Catalogos/tipo-aeronave/tipo-aeronave.component'
import { TipoDocumentComponent } from './modules/main/pages/Catalogos/tipo-document/tipo-document.component'
import { TipoVehiculoComponent } from './modules/main/pages/Catalogos/tipo-vehiculo/tipo-vehiculo.component'
import { UsuariosComponent } from './modules/main/pages/usuarios/usuarios.component'

import { NgModule } from '@angular/core';

export const routes: Routes = [

    {
        path: '',
        component: LabsComponent,
        data: {
            title: 'Dashboard'
        }
    },

    {
        path: 'Aseguradoras',
        component: AseguradoraComponent,
        data: {
            title: 'Aseguradoras'
        }
    },
    {
        path: 'FabricantesdeAeronaves',
        component: FabAeronavesComponent,
        data: {
            title: 'Fabricantes de Aeronaves'
        }
    },
    {
        path: 'MarcasdeVehiculos',
        component: MarVehiculosComponent,
        data: {
            title: 'Marcas de Vehiculos'
        }
    },
    {
        path: 'NivelesdeBlindaje',
        component: NivBlindajeComponent,
        data: {
            title: 'Niveles de Blindaje'
        }
    },
    {
        path: 'RamosdePóliza',
        component: RamPolizasComponent,
        data: {
            title: 'Ramos de Póliza'
        }
    },
    {
        path: 'TiposdeAeronave',
        component: TipoAeronaveComponent,
        data: {
            title: 'Tipos de Aeronaves'
        }
    },
    {
        path: 'TiposdeDocumentos',
        component: TipoDocumentComponent,
        data: {
            title: 'Tipos de Documentos'
        }
    },
    {
        path: 'TiposdeVehículos',
        component: TipoVehiculoComponent
        ,
        data: {
            title: 'Tipos de Vehiculos'
        }
    },
    {
        path: 'Usuarios',
        component: UsuariosComponent,
        data: {
            title: 'Usuarios'
        }
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
