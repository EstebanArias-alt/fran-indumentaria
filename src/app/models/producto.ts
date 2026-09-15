export interface ProductoImagen {
  id: number;

  producto_id?: number;

  url: string;

  orden: number;

  principal: boolean;

  created_at?: string;
}


export interface Producto {

  /* ========================= */
  /* DATOS PRINCIPALES */
  /* ========================= */

  id: number;

  nombre: string;

  slug: string;

  categoria: string;

  descripcion: string;


  /* ========================= */
  /* PRECIOS */
  /* ========================= */

  precio: number | null;

  precio_anterior?: number | null;

  precioAnterior?: number | null;


  /* ========================= */
  /* FRAN INDUMENTARIA */
  /* ========================= */

  talles?: string[] | string;

  colores?: string[] | string;


  /* ========================= */
  /* CAMPOS VIEJOS */
  /* TEMPORALES */
  /* ========================= */

  cuotas?: string;

  medidas?: string;

  material?: string;


  /* ========================= */
  /* ESTADOS */
  /* ========================= */

  stock: boolean;

  oferta: boolean;

  nuevo: boolean;

  destacado: boolean;


  /* ========================= */
  /* IMÁGENES */
  /* ========================= */

  /*
   * Imágenes originales que vienen
   * de Supabase.
   */
  producto_imagenes?: ProductoImagen[];

  /*
   * Imagen fallback vieja.
   */
  imagen?: string;

  imagenPrincipal?: string;

  /*
   * En ProductoDetalle se usan
   * solamente las URLs.
   */
  imagenes?: string[];


  /* ========================= */
  /* FECHAS */
  /* ========================= */

  created_at?: string;

}