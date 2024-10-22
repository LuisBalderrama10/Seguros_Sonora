import { Component } from '@angular/core';
import { SidebarComponent } from './modules/main/components/sidebar/sidebar.component';
import { BuscadorComponent } from './modules/main/components/buscador/buscador.component';
@
Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./modules/main/pages/Vehiculos/pag2.component.css'],
  standalone : true,
  imports: [SidebarComponent, BuscadorComponent]
})
export class AppComponent {
  title = 'SegurosSonora';
}
