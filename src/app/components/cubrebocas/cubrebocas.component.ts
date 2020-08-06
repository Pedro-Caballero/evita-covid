import { Component, OnInit } from '@angular/core';
import { CubrebocasService, Cubrebocas } from '../../services/cubrebocas.service';


@Component({
  selector: 'app-cubrebocas',
  templateUrl: './cubrebocas.component.html',
  styleUrls: ['./cubrebocas.component.css']
})
export class CubrebocasComponent implements OnInit {

  cubrebocas:Cubrebocas[] = [];

  constructor( private _cubrebocasService: CubrebocasService) { }

  ngOnInit(): void {
    this.cubrebocas = this._cubrebocasService.getCubre();
  }

}
