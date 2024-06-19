import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ITea } from 'src/app/models/teas.model';
import { ITestimonie } from 'src/app/models/testimonies.model';
import { TeasService } from 'src/app/services/teas.service';
import { TestimoniesService } from 'src/app/services/testimonies.service';

const MODULES = [
  CurrencyPipe,
  RouterLink
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MODULES ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  teas: ITea[] = [];
  testimonies: ITestimonie[] = [];

  
  private testimoniesService = inject(TestimoniesService)
  private teasService = inject(TeasService)

  ngOnInit(): void {
    this.teasService.getTeas().subscribe({
      next: (res: any) => {
        this.teas = res
      },
      error: (err) => {
        console.error('Error al obtener los tés: ', err)
      }
    });
    this.testimoniesService.getTestimonies().subscribe({
      next: (res: any) => {
        this.testimonies = res
      },
      error: (err) => {
        console.error('Error al obtener los testimonios: ', err)
      }
    });
  }
}