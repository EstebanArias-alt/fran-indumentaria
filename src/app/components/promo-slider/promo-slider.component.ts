import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-promo-slider',
  standalone: true,

  imports: [],

  templateUrl:
    './promo-slider.component.html',

  styleUrl:
    './promo-slider.component.css'
})
export class PromoSliderComponent
  implements OnInit, OnDestroy {


  banners = [

    {
      imagen:
        '/images/banners/banner-fran-1.jpg',

      titulo:
        'Encontrá tu próximo look',

      subtitulo:
        'Prendas lindas, cómodas y pensadas para todos los días.',

      boton:
        'Ver catálogo',

      link:
        '#productos'
    },


    {
      imagen:
        '/images/banners/banner-fran-2.jpg',

      titulo:
        'Nuevos ingresos',

      subtitulo:
        'Descubrí las prendas que vamos sumando a Fran.',

      boton:
        'Ver prendas',

      link:
        '#productos'
    },


    {
      imagen:
        '/images/banners/banner-fran-3.jpg',

      titulo:
        'Seguinos en redes',

      subtitulo:
        'Encontranos en Instagram y TikTok para ver novedades, looks y nuevos ingresos.',

      boton:
        'Ver redes',

      link:
        '#contacto'
    }

  ];


  currentIndex = 0;


  private intervalId?:
    ReturnType<typeof setInterval>;


  /* ========================= */
  /* INICIAR SLIDER */
  /* ========================= */

  ngOnInit(): void {

    this.intervalId =
      setInterval(
        () => {

          this.next();

        },
        5000
      );

  }


  /* ========================= */
  /* DESTRUIR INTERVALO */
  /* ========================= */

  ngOnDestroy(): void {

    if (this.intervalId) {

      clearInterval(
        this.intervalId
      );

    }

  }


  /* ========================= */
  /* SIGUIENTE */
  /* ========================= */

  next(): void {

    this.currentIndex =
      (
        this.currentIndex + 1
      )
      %
      this.banners.length;

  }


  /* ========================= */
  /* ANTERIOR */
  /* ========================= */

  previous(): void {

    this.currentIndex =
      (
        this.currentIndex
        - 1
        + this.banners.length
      )
      %
      this.banners.length;

  }


  /* ========================= */
  /* IR A BANNER */
  /* ========================= */

  goTo(
    index: number
  ): void {

    this.currentIndex =
      index;

  }

}