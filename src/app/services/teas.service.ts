import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments';
import { Observable } from 'rxjs';
import { ITea } from '../models/teas.model';

@Injectable({
  providedIn: 'root'
})
export class TeasService {
    private http = inject(HttpClient)

    private apiUrl = environment.apiUrl

    getTeas(): Observable<ITea[]> {
        return this.http.get<ITea[]>(`${this.apiUrl}/teas`);
    }

    getTea(productId: string): Observable<ITea> {
        return this.http.get<ITea>(`${this.apiUrl}/teas/${productId}`);
    }
}
