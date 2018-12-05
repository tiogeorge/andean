import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Constantes} from '../constantes';
import {Articulo} from './articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloDetalleService {
  http: HttpClient;
  articuloSeleccionado: Articulo = new Articulo();
  url_imagenes = Constantes.URL_IMAGEN;

  constructor( http: HttpClient) {
    this.http = http;
   }

  getArticulo(idarticulo: string){
    return this.http.get(Constantes.URL_API_ARTICULO+'/url/'+idarticulo);
  }
}