import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments';
import { Observable } from 'rxjs';
import { ITestimonie } from '../models/testimonies.model';

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {
  private http = inject(HttpClient)

  private apiUrl = environment.apiUrl

  getTestimonies(): Observable<ITestimonie> {
      return this.http.get<ITestimonie>(`${this.apiUrl}/testimonies`)
  }
}
