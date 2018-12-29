import { Constantes } from '../constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(public http: HttpClient) { }

  nuevaSesion(){
    return this.http.post<any>(Constantes.URL_API_SESION, localStorage, {withCredentials: true}).pipe(
      catchError(this.handleError<any>('postSesion'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
