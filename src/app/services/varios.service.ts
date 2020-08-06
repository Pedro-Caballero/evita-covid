import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariosService {

  private varios: any[] = [
    {
      producto: "uniforme quirúgico",
      precio: "$100.00",
      img: "assets/img/bata.jpeg",
      caracteristicas: "uniforme quirúrgica sencillo filipina y pantalón no estéril tallas: --"
    },
    {
      producto: "bata quirúgica",
      precio: "$90.00",
      img: "assets/img/bata2.jpeg",
      caracteristicas: "bata  quirúrgica sencilla puño blanco no estéril"
    },
    {
      producto: "bota quirúrgica",
      precio: "El par-$20.00",
      img: "assets/img/bota.jpeg",
      caracteristicas: "bota quirúrgica desechable no estéril"
    },
  ]

  constructor() { }

  getVarios():Varios[]{
    return this.varios;
  }
}

export interface Varios{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}