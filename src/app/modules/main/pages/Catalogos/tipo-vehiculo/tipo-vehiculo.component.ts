import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from '../../../components/buscador/buscador.component'
import { SidebarComponent } from '../../../components/sidebar/sidebar.component'

@Component({
  selector: 'app-tipo-vehiculo',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  templateUrl: './tipo-vehiculo.component.html',
  styleUrl: './tipo-vehiculo.component.css'
})
export class TipoVehiculoComponent {

}
