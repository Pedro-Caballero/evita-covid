import { Component, OnInit } from '@angular/core';
import { SenalizacionesService, Senalizaciones } from '../../services/senalizaciones.service';

@Component({
  selector: 'app-senalizaciones',
  templateUrl: './senalizaciones.component.html',
  styleUrls: ['./senalizaciones.component.css']
})
export class SenalizacionesComponent implements OnInit {

  senalizaciones: Senalizaciones[] = [];

  constructor(private senalizacionesService: SenalizacionesService) { }

  ngOnInit(): void {
    this.senalizaciones = this.senalizacionesService.getSenalizaciones();
  }

}
