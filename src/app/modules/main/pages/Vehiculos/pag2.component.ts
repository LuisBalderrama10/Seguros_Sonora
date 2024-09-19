import { HttpClient } from '@angular/common/http';

import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component'
import { BuscadorComponent } from '../../components/buscador/buscador.component'
import { ApiService } from '../../../../../../services/api.service';

@Component({
  selector: 'app-pag2',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, BuscadorComponent],
  templateUrl: './pag2.component.html',
  styleUrl: './pag2.component.css'
})

export class Pag2Component implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
}

}
