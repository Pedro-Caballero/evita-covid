import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenalizacionesService {

  private senalizaciones: any [] = [
    {
      producto: "Extintor",
      precio: "$25.00",
      img: "assets/img/extintor.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "Sanitario",
      precio: "$25.00",
      img: "assets/img/sanitario.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "gel antibacterial",
      precio: "$25.00",
      img: "assets/img/gel.jpeg",
      caracteristicas: "tamano chico"
    },
    {
      producto: "Punto de reuinión",
      precio: "$50.00",
      img: "assets/img/reunion.jpeg",
      caracteristicas: "tamaño grande"
    },
    {
      producto: "uso obligatorio de cubrebocas",
      precio: "$30.00",
      img: "assets/img/usocubre.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "aviso baño limpio",
      precio: "$25.00",
      img: "assets/img/aviso.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "prohibido fumar",
      precio: "$25.00",
      img: "assets/img/prohibido.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "ruta de evacuación",
      precio: "CH-$25.00 G-$50",
      img: "assets/img/ruta.jpeg",
      caracteristicas: "tamaño chico y grande"
    },
    {
      producto: "técnica de lavado de manos",
      precio: "$25.00",
      img: "assets/img/tecnica.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "negocio con medidas sanitarias",
      precio: "$30.00",
      img: "assets/img/negocio.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "por disposición solo para llevar",
      precio: "$30.00",
      img: "assets/img/disposicion.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "usa el tapete sanitizante",
      precio: "$30.00",
      img: "assets/img/usatapete.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "deposita la basura en el cesto",
      precio: "$30.00",
      img: "assets/img/deposita.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "recordemos mantener la distancia",
      precio: "M-$30.00 G-$50.00",
      img: "assets/img/recordemos.jpeg",
      caracteristicas: "tamaño mediano y grande"
    },
    {
      producto: "que hacer en: sismos",
      precio: "$30.00",
      img: "assets/img/sismos.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "normas sanitarias",
      precio: "$30.00",
      img: "assets/img/normas.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "gracias por no estacionarse",
      precio: "$50.00",
      img: "assets/img/gracias.jpeg",
      caracteristicas: "tamaño grande"
    },
    {
      producto: "evitar saludar de mano",
      precio: "$50.00",
      img: "assets/img/evita.jpeg",
      caracteristicas: "tamaño grande"
    },
    {
      producto: "el uso de mascarilla es obligatorio",
      precio: "$50.00",
      img: "assets/img/usode.jpeg",
      caracteristicas: "tamaño grande"
    },
    {
      producto: "punto de reuinion",
      precio: "$50.00",
      img: "assets/img/punto.jpeg",
      caracteristicas: "tamaño grande"
    },
    {
      producto: "letrero máximo de personas por área",
      precio: "$30.00",
      img: "assets/img/maximo.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "letrero wi-fi",
      precio: "$25.00",
      img: "assets/img/wifi.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "letrero alto voltake",
      precio: "$25.00",
      img: "assets/img/voltaje.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "letrero doble vista abierto/cerrado",
      precio: "$30.00",
      img: "assets/img/doble.jpeg",
      caracteristicas: "tamaño mediano"
    },
    {
      producto: "calcomanía para piso",
      precio: "$75.00",
      img: "assets/img/piso.jpeg",
      caracteristicas: "calcomanía para piso adherible"
    },
    {
      producto: "tapete para piso",
      precio: "$75.00",
      img: "assets/img/tapete.jpeg",
      caracteristicas: "tapete adherible para piso"
    },
    {
      producto: "letrero uso de gel y cubrebocas",
      precio: "$50.00",
      img: "assets/img/usoobligatorio.jpeg",
      caracteristicas: "tamaño grande"
    },
    {
      producto: "letrero de no se discrimina",
      precio: "$25.00",
      img: "assets/img/nosediscrimina.jpeg",
      caracteristicas: "tamaño chico"
    },
    {
      producto: "letrero de cámaras de vigilancia",
      precio: "$25.00",
      img: "assets/img/camaras.jpeg",
      caracteristicas: "tamaño chico"
    },
  ]

  constructor() { }

  getSenalizaciones():Senalizaciones[]{
    return this.senalizaciones;
  }
}

export interface Senalizaciones{
  producto: string;
  precio: string;
  img: string;
  caracteristicas: string;
}
