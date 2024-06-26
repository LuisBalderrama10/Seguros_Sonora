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

  toggleMenu(event: Event): void {
    this.isMenuOpened = !this.isMenuOpened;
    event.stopPropagation();
  }
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    this.isMenuOpened = false;
  }

  constructor(private router: Router) { }

  redirigirAPagina(): void {
    this.router.navigate(['/prueba']);
  }
  redirigirAPagina2(): void {
    this.router.navigate(['/']);
  }
}
