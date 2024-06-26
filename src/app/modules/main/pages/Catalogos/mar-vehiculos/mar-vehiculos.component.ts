import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from '../../../components/buscador/buscador.component'
import { SidebarComponent } from '../../../components/sidebar/sidebar.component'

@Component({
  selector: 'app-mar-vehiculos',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  templateUrl: './mar-vehiculos.component.html',
  styleUrl: './mar-vehiculos.component.css'
})
export class MarVehiculosComponent {

}
