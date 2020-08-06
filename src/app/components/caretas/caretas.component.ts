import { Component, OnInit } from '@angular/core';
import { CaretasService, Caretas } from '../../services/caretas.service';

@Component({
  selector: 'app-caretas',
  templateUrl: './caretas.component.html',
  styleUrls: ['./caretas.component.css']
})
export class CaretasComponent implements OnInit {

  caretas:Caretas[] = [];

  constructor(private caretasService: CaretasService) { }

  ngOnInit(): void {
    this.caretas = this.caretasService.getCaretas();
  }

}
