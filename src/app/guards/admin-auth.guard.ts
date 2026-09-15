import {
  inject
} from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import {
  SupabaseService
} from '../services/supabase.service';


export const adminAuthGuard: CanActivateFn =
  async () => {

    const supabaseService =
      inject(SupabaseService);

    const router =
      inject(Router);


    // Obtener usuario actualmente logueado
    const usuario =
      await supabaseService
        .obtenerUsuario();


    // ===================================
    // NO HAY SESIÓN
    // ===================================

    if (!usuario) {

      return router.createUrlTree([
        '/admin/login'
      ]);

    }


    // ===================================
    // ADMIN AUTORIZADO - FRAN
    // ===================================

    const ADMIN_UID =
      '8a531238-87d1-47d3-bc75-0a29c337988f';


    // ===================================
    // HAY SESIÓN PERO NO ES ADMIN
    // ===================================

    if (
      usuario.id !== ADMIN_UID
    ) {

      console.warn(
        'Usuario sin permisos de administrador.'
      );


      await supabaseService
        .cerrarSesion();


      return router.createUrlTree([
        '/admin/login'
      ]);

    }


    // ===================================
    // ADMIN CORRECTO
    // ===================================

    console.log(
      'ADMIN AUTORIZADO:',
      usuario.email
    );


    return true;

  };