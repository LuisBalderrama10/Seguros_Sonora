import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component'
import { BuscadorComponent } from '../../components/buscador/buscador.component'

@Component({
  selector: 'app-Usuarios',
  templateUrl: './Usuarios.component.html',
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  styleUrls: ['./Usuarios.component.css']
})
export class UsuariosComponent {



}
