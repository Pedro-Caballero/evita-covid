import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TapeteService {

  private tapetes: any [] = [
    {
      producto: "Tapete sanitizante chico",
      precio: "$160.00",
      img: "assets/img/tapetechico.jpeg",
      caracteristicas: "tapete sanitizante chico de 30 x 40cm"
    },
    {
      producto: "Tapete sanitizante",
      precio: "$220.00",
      img: "assets/img/tapetealfombra.jpeg",
      caracteristicas: "tapete sanitizante de charola con alfombra"
    },
    {
      producto: "Tapete sanitizante grnade",
      precio: "$260.00",
      img: "assets/img/tapetegrande.jpeg",
      caracteristicas: "tapete sanitizante grande de 40 x 60 cm"
    }
  ]

  constructor() { }

  getTapetes():Tapetes[]{
    return this.tapetes;
  }
}

export interface Tapetes{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}
