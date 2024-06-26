import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from '../../../components/buscador/buscador.component'
import { SidebarComponent } from '../../../components/sidebar/sidebar.component'

@Component({
  selector: 'app-ram-polizas',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  templateUrl: './ram-polizas.component.html',
  styleUrl: './ram-polizas.component.css'
})
export class RamPolizasComponent {

}
