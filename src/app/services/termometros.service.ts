import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermometrosService {
  private termometros: any[] = [
    {
      producto: "oximetro digital",
      precio: "$800.00",
      img: "assets/img/oximetro.jpeg",
      caracteristicas: "usa pilas triple A (no incluye pilas)"
    },
    {
      producto: "termómetro infrarrojo",
      precio: "$1000.00",
      img: "assets/img/termometro.jpeg",
      caracteristicas: "usa pilas doble A (no incluye pilas)"
    },
    {
      producto: "termómetro digital",
      precio: "$90.00",
      img: "assets/img/oximetro.jpeg",
      caracteristicas: "(incluye baterías)"
    },
  ]

  constructor() { }
  getTemometros():Termometros[]{
    return this.termometros;
  }
}

export interface Termometros{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}