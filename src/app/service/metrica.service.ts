import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Metrica } from '../components/metricas/metricas.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricaService {
  private apiUrl = 'http://localhost:8080/bienestar-emocional/todos';

  constructor(private http: HttpClient) { console.log('aqui si funciona')}

  obtenerMetricas(): Observable<Metrica[]> {
    return this.http.get<Metrica[]>(this.apiUrl);
  }

}
