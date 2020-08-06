import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuantesService {

  private guantes: any[] =[
    {
      producto: "Guante de nitrilo",
      precio: "$10.00 el par",
      img: "assets/img/guantenitrilo.jpeg",
      caracteristicas: "lavable"
    },
    {
      producto: "Guante de latex",
      precio: "$8.00 el par",
      img: "assets/img/guantelatex.jpeg",
      caracteristicas: "de latex estéril"
    }
  ]

  constructor() { }
  getGuantes():Guantes[]{
    return this.guantes;
  }
}

export interface Guantes{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}
