import {
  Component,
  Input
} from '@angular/core';

import {
  DecimalPipe
} from '@angular/common';

import {
  RouterLink
} from '@angular/router';

import {
  Producto
} from '../../models/producto';


@Component({
  selector: 'app-product-card',
  standalone: true,

  imports: [
    DecimalPipe,
    RouterLink
  ],

  templateUrl:
    './product-card.component.html',

  styleUrl:
    './product-card.component.css'
})
export class ProductCardComponent {

  @Input({ required: true })
  producto!: Producto;


  /* ========================= */
  /* IMAGEN PRINCIPAL */
  /* ========================= */

  get imagenPrincipal(): string {

    if (
      this.producto.producto_imagenes &&
      this.producto.producto_imagenes.length > 0
    ) {

      const principal =
        this.producto.producto_imagenes.find(
          imagen =>
            imagen.principal
        );


      if (principal) {

        return principal.url;

      }


      const ordenadas =
        [
          ...this.producto.producto_imagenes
        ]
          .sort(
            (a, b) =>
              a.orden - b.orden
          );


      return ordenadas[0].url;

    }


    return (
      this.producto.imagen
      ??
      '/images/productos/sin-imagen.jpg'
    );

  }


  /* ========================= */
  /* TALLES */
  /* ========================= */

  get esArrayTalles(): boolean {

    return Array.isArray(
      this.producto.talles
    );

  }


  get tallesTexto(): string {

    if (
      Array.isArray(
        this.producto.talles
      )
    ) {

      return this.producto.talles
        .join(', ');

    }


    if (
      typeof this.producto.talles
      === 'string'
    ) {

      return this.producto.talles;

    }


    return '';

  }


  /* ========================= */
  /* WHATSAPP */
  /* ========================= */

  get whatsappUrl(): string {

    const numero =
      '5493884605421';


    const precio =
      this.producto.precio

        ? `$${this.producto.precio
            .toLocaleString('es-AR')}`

        : 'Consultar precio';


    const enlace =
      `${window.location.origin}/producto/${this.producto.slug}`;


    const talles =
      this.tallesTexto
      || 'Consultar';


    const colores =
      Array.isArray(
        this.producto.colores
      )

        ? this.producto.colores.join(', ')

        : (
            this.producto.colores
            || 'Consultar'
          );


    const mensaje =
      this.producto.stock

        ? (
            `Hola FRAN INDUMENTARIA 👋\n\n` +

            `Quisiera consultar por esta prenda:\n\n` +

            `👗 ${this.producto.nombre}\n` +

            `💰 ${precio}\n` +

            `📂 Categoría: ${this.producto.categoria}\n` +

            `📏 Talles: ${talles}\n` +

            `🎨 Colores: ${colores}\n\n` +

            `🔗 ${enlace}\n\n` +

            `¿Me podrían informar disponibilidad y formas de pago?`
          )

        : (
            `Hola FRAN INDUMENTARIA 👋\n\n` +

            `Vi esta prenda pero figura sin stock:\n\n` +

            `👗 ${this.producto.nombre}\n` +

            `💰 ${precio}\n` +

            `📂 Categoría: ${this.producto.categoria}\n` +

            `📏 Talles: ${talles}\n` +

            `🎨 Colores: ${colores}\n\n` +

            `🔗 ${enlace}\n\n` +

            `¿Tienen fecha estimada de reposición o alguna prenda similar?`
          );


    return (
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
    );

  }


  /* ========================= */
  /* DESCUENTO */
  /* ========================= */

  get porcentajeDescuento():
    number | null {

    const precio =
      this.producto.precio;


    const precioAnterior =
      this.producto.precioAnterior
      ??
      this.producto.precio_anterior;


    if (
      !this.producto.oferta ||
      !precio ||
      !precioAnterior ||
      precioAnterior <= precio
    ) {

      return null;

    }


    return Math.round(
      (
        (
          precioAnterior - precio
        )
        /
        precioAnterior
      )
      *
      100
    );

  }


  /* ========================= */
  /* ERROR DE IMAGEN */
  /* ========================= */

  imagenError(
    event: Event
  ): void {

    const imagen =
      event.target as HTMLImageElement;


    imagen.onerror =
      null;


    imagen.src =
      '/images/productos/sin-imagen.jpg';

  }

}