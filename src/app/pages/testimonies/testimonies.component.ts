import { Component, OnInit, inject } from '@angular/core';
import { TestimoniesService } from 'src/app/services/testimonies.service';

@Component({
  selector: 'app-testimonies',
  standalone: true,
  imports: [],
  templateUrl: './testimonies.component.html',
  styleUrl: './testimonies.component.css'
})
export class TestimoniesComponent implements OnInit {
  testimonies: any[] = [];

  private testimoniesService = inject(TestimoniesService)

  ngOnInit(): void {
    this.testimoniesService.getTestimonies().subscribe({
      next: (res: any) => {
        this.testimonies = res
        console.log(this.testimonies)
      },
      error: (err) => {
        console.error('Error al obtener los testimonios: ', err)
      }
    })
  }
}