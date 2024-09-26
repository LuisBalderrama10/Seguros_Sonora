import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isMenuOpened: boolean = false;
  isMenuOpened2: boolean = false;

  toggleMenu(event: Event): void {
    this.isMenuOpened = !this.isMenuOpened;
    event.stopPropagation();
  }
  toggleMenu2(event2: Event): void {
    this.isMenuOpened2 = !this.isMenuOpened2;
    event2.stopPropagation();
  }
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    this.isMenuOpened = false;
  }
  @HostListener('document:click', ['$event2'])
  closeDropdown2(event2: Event): void {
    this.isMenuOpened2 = false;
  }

  constructor(private router: Router) { }

  redirigirAPagina(): void {
    this.router.navigate(['/prueba']);
  }
  redirigirAPagina2(): void {
    this.router.navigate(['/']);
  }
  redirigirAAseguradoras(): void {
    this.router.navigate(['/Aseguradoras']);
  }
  redirigirAFabAero(): void {
    this.router.navigate(['/FabricantesdeAeronaves']);
  }
  redirigirAMarcVehic(): void {
    this.router.navigate(['/MarcasdeVehiculos']);
  }
  redirigirANivBlin(): void {
    this.router.navigate(['/NivelesdeBlindaje']);
  }
  redirigirARamoPoli(): void {
    this.router.navigate(['/RamosdePóliza']);
  }
  redirigirATipoAero(): void {
    this.router.navigate(['/TiposdeAeronave']);
  }
  redirigirATipoDoc(): void {
    this.router.navigate(['/TiposdeDocumentos']);
  }
  redirigirATipoVehic(): void {
    this.router.navigate(['/TiposdeVehículos']);
  }
  redirigirAUsuarios(): void {
    this.router.navigate(['/Usuarios']);
  }
  redirigirAVehiculos(): void {
    this.router.navigate(['/Vehiculos']);
  }

}
