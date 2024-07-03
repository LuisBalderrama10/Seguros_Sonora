import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component'
import { BuscadorComponent } from '../../components/buscador/buscador.component'
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

}