import { Component, OnInit } from '@angular/core';
import { TuTablaService } from '../../services/api.service';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.component.html',
  styleUrls: ['./pag2.component.css']
})
export class Pag2Component implements OnInit {
  datos: any[] = [];

  constructor(private tuTablaService: TuTablaService) {}

  ngOnInit(): void {
    this.tuTablaService.getDatos().subscribe((data) => {
      this.datos = data;
    });
  }
}


