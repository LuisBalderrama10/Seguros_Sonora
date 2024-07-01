import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from '../../../components/buscador/buscador.component'
import { SidebarComponent } from '../../../components/sidebar/sidebar.component'

@Component({
  selector: 'app-fab-aeronaves',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  templateUrl: './fab-aeronaves.component.html',
  styleUrl: './fab-aeronaves.component.css'
})
export class FabAeronavesComponent {

}
