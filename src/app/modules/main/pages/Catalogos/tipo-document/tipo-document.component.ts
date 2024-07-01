import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from '../../../components/buscador/buscador.component'
import { SidebarComponent } from '../../../components/sidebar/sidebar.component'

@Component({
  selector: 'app-tipo-document',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  templateUrl: './tipo-document.component.html',
  styleUrl: './tipo-document.component.css'
})
export class TipoDocumentComponent {

}
