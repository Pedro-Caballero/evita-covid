import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LentesService {

  private lentes: any[] = [
    {
      producto: "lentes sencillos",
      precio: "$50.00",
      img: "assets/img/lentessencillos.jpeg",
      caracteristicas: "lentes sencillos de proyección"
    },
    {
      producto: "goggles",
      precio: "$100.00",
      img: "assets/img/googles.jpeg",
      caracteristicas: "googles con respiradores"
    },
    {
      producto: "goggles",
      precio: "$120.00",
      img: "assets/img/goggles.jpeg",
      caracteristicas: "goggles con respiradores visibles"
    },
    {
      producto: "goggles plus",
      precio: "$130.00",
      img: "assets/img/goggleplus.jpeg",
      caracteristicas: "goggles plus"
    },
    {
      producto: "lentes de protección",
      precio: "$80.00",
      img: "assets/img/lentesproteccion.jpeg",
      caracteristicas: "lentes de proteccion bicolor con patilla ajustable"
    },
    {
      producto: "lentes con base",
      precio: "$35.00",
      img: "assets/img/lentesbase.jpeg",
      caracteristicas: "lentes con base"
    }
  ]

  constructor() { }

  getLentes():Lentes[]{
    return this.lentes;
  }
}

export interface Lentes{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}