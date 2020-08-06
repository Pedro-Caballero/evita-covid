import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaretasService {

  private caretas: any[] = [
    {
      producto: "Careta rígida",
      precio: "$45.00",
      img: "assets/img/caretarigida.jpeg",
      caracteristicas: "careta rígida ajustable color verde, morado y azul cielo"
    },
    {
      producto: "Careta infantil",
      precio: "$45.00",
      img: "assets/img/caretaadulto.jpeg",
      caracteristicas: "careta plegable y ajustable"
    },
    {
      producto: "Careta para adulto",
      precio: "$55.00",
      img: "assets/img/caretaa.jpeg",
      caracteristicas: "careta plegable y ajustable con remaches laterales"
    },
    {
      producto: "Careta para adulto",
      precio: "$45.00",
      img: "assets/img/caretacolors.jpeg",
      caracteristicas: "careta plegable y ajustable para adulto, color azul y negro"
    },
    {
      producto: "Careta sencilla",
      precio: "$35.00",
      img: "assets/img/caretasencilla.jpeg",
      caracteristicas: "careta sencilla plegable de diadema con esponja"
    },
    {
      producto: "Careta con gorra",
      precio: "$70.00",
      img: "assets/img/caretagorra.jpeg",
      caracteristicas: "careta con gorra plegable y desmontable de varios colores"
    },
    {
      producto: "Careta infantil con gorra",
      precio: "$70.00",
      img: "assets/img/caretainfantil.jpeg",
      caracteristicas: "careta infantil plegable y ajustable con diferentes diseños para niño y niña"
    },
    {
      producto: "Careta económica",
      precio: "$25.00",
      img: "assets/img/caretaeconomica.jpeg",
      caracteristicas: "careta económica armable y ajustable"
    },
    {
      producto: "Careta con lentes",
      precio: "$80.00",
      img: "assets/img/caretalente.jpeg",
      caracteristicas: "careta con lente armable"
    },
    {
      producto: "Careta con lentes",
      precio: "$65.00",
      img: "assets/img/caretacolores.jpeg",
      caracteristicas: "contamos con varios colores"
    },
    {
      producto: "Careta de cinturón",
      precio: "$55.00",
      img: "assets/img/caretacinturon.jpeg",
      caracteristicas: "careta de cinturón infantil, plegable y ajustable"
    },
  ]

  constructor() { }

  getCaretas():Caretas[]{
    return this.caretas;
  }
}
export interface Caretas{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}