import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CubrebocasService {

  private cubreboca: any[] =[
    {
      producto: "Cubrebocas Tricapa",
      precio: "$3.50",
      img: "assets/img/cubreazul.jpeg",
      caracteristicas: "Color Azul"
    },
    {
      producto: "Cubrebocas Tricapa",
      precio: "$3.50",
      img: "assets/img/cubreblanco.jpeg",
      caracteristicas: "Color Blanco"
    },
    {
      producto: "Cubrebocas Triangular Barbilla",
      precio: "$6.00",
      img: "assets/img/cubretriangular.jpeg",
      caracteristicas: "Color azul cielo, verde agua y azul fuerte"
    },
    {
      producto: "Cubrebocas Tricapa",
      precio: "$6.00",
      img: "assets/img/cubreticapa.jpeg",
      caracteristicas: "Color azul cielo y verde agua"
    },
    {
      producto: "Cubrebocas Lavable",
      precio: "$7.00",
      img: "assets/img/cubrelavable.jpeg",
      caracteristicas: "Color azul cielo y verde agua"
    },
    {
      producto: "Cubrebocas Termosellado",
      precio: "$10.00",
      img: "assets/img/cubretermo.jpeg",
      caracteristicas: "con ajustador nasal tricapa, color blanco"
    },
    {
      producto: "Cubrebocas Termosellado",
      precio: "$08.50",
      img: "assets/img/cubretermoa.jpeg",
      caracteristicas: "con ajustador nasal tricapa, color azul"
    },
    {
      producto: "Cubrebocas Termosellado (infantil)",
      precio: "$10.00",
      img: "assets/img/cubretermoinfantil.jpeg",
      caracteristicas: "con ajustador nasal tricapa, color blanco y azul"
    },
    {
      producto: "Cubrebocas de neopreno",
      precio: "$20.00",
      img: "assets/img/cubrelavableneopreno.jpeg",
      caracteristicas: "cubrebocas lavable infantil y adulto color negro"
    },
    {
      producto: "Cubrebocas infantil",
      precio: "$11.00",
      img: "assets/img/cubreinfantil.jpeg",
      caracteristicas: "cubrebocas infantil con diseño para niño y niña"
    },
    {
      producto: "Cubrebocas de concha",
      precio: "$20.00",
      img: "assets/img/cubreconcha.jpeg",
      caracteristicas: "color blanco"
    },
     {
      producto: "Cubrebocas KN95",
      precio: "$45.00",
      img: "assets/img/cubrekn95.jpeg",
      caracteristicas: "económico"
    },
    {
      producto: "Cubrebocas KN95 plus",
      precio: "$45.00",
      img: "assets/img/cubrekn95plus.jpeg",
      caracteristicas: "económico"
    },
    {
      producto: "Mascarilla porta filtros",
      precio: "$200.00",
      img: "assets/img/mascarillaportafiltros.jpeg",
      caracteristicas: "mascarilla plstificada con filtros removibles (incluye 10 filtros)"
    },
    {
      producto: "Cubrebocas KN95 lavable",
      precio: "$120.00",
      img: "assets/img/cubrekn95lavable.jpeg",
      caracteristicas: "con válvula"
    },
    {
      producto: "Cubrebocas KN95",
      precio: "$80.00",
      img: "assets/img/cubrekn95sesechable.jpeg",
      caracteristicas: "desechable con válvula, varios colores"
    },
    {
      producto: "Cubrebocas KN95",
      precio: "$75.00",
      img: "assets/img/cubrekn95sesechable.jpeg",
      caracteristicas: "desechable con válvula, color blanco"
    },
    {
      producto: "Cubrebocas con careta",
      precio: "$40.00",
      img: "assets/img/cubrecareta.jpeg",
      caracteristicas: "cubrebocas de neopreno con careta unida"
    },
    {
      producto: "Cubrebocas con careta",
      precio: "$45.00",
      img: "assets/img/cubrecaretades.jpeg",
      caracteristicas: "cubrebocas de neopreno con careta desmontanle"
    }
  ]
  constructor() { }

  getCubre():Cubrebocas[]{
    return this.cubreboca;
  }

}

export interface Cubrebocas{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}
