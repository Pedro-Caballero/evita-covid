import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GelService {

  private gel: any [] = [
    {
      producto: "Ok Zero",
      precio: "$30.00",
      img: "assets/img/desinfectante.jpeg",
      caracteristicas: "Sanitizante y desinfectante 125ml"
    },
    {
      producto: "Sanitifresh 1LT",
      precio: "$160.00",
      img: "assets/img/sanitifresh.jpeg",
      caracteristicas: "Solución sanitizante y desinfecta cualquier área y/o superficie de contacto 100% biodegradable, amigable con la piel no manche ni despinta textiles. Diferentes aromas: (canela, naranja, limón y jasmín)"
    },
    {
      producto: "Bio-Q°6",
      precio: "$180.00",
      img: "assets/img/bioq.jpeg",
      caracteristicas: "sanitizante y desinfectante, presentación de 1LT"
    },
    {
      producto: "Ok Zero 1000ML",
      precio: "$100.00",
      img: "assets/img/okzero.jpeg",
      caracteristicas: "Sanitizante y desinfectante cont. 1000ml"
    },
    {
      producto: "Sanix",
      precio: "$30.00",
      img: "assets/img/sanix.jpeg",
      caracteristicas: "Sanitizante y desinfectante 125ml"
    },
  ] 


  constructor() { }
  getGel():Gel[]{
    return this.gel;
  }
}

export interface Gel{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}