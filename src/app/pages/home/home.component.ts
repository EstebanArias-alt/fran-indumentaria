import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PromoBarComponent } from '../../components/promo-bar/promo-bar.component';
import { PromoSliderComponent } from '../../components/promo-slider/promo-slider.component';

import { ProductosComponent } from '../../components/productos/productos.component';
import { OfertasComponent } from '../../components/ofertas/ofertas.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';

import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    HeaderComponent,
    NavbarComponent,
    PromoBarComponent,
    PromoSliderComponent,

    ProductosComponent,
    OfertasComponent,
    NosotrosComponent,
    ContactoComponent,

    FooterComponent,
    WhatsappButtonComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}