import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from './receta';
import { environment } from '../environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  private apiUrl = environment.baseUrl + 'recipes';

  constructor(private http: HttpClient) {}
  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.apiUrl);
  }

}
