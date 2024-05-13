import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Vivienda } from './_modelo/Vivienda';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  private url: string = 'http://localhost:8080/viviendas';
  viviendaCambio = new Subject<Vivienda[]>();

  listar(): Observable<Vivienda[]> {

    return this.http.get<Vivienda[]>(this.url)
      .pipe(
        map(data => {
          console.log("dentro de la llamada");
          return data.sort((a, b) => a.idVivienda - b.idVivienda);
        })
      );
  }
  alta(v: Vivienda) {
    return this.http.post(this.url, v);
  }
  eliminar(id: number) {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
  actualizar(v: Vivienda) {
    return this.http.put(this.url, v);
  }
  listarPorId(id: number) {
    return this.http.get<Vivienda>(`${this.url}/${id}`);
  }

  constructor(private http: HttpClient) { }
}



