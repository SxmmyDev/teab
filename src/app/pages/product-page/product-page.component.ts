import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITea } from 'src/app/models/teas.model';
import { TeasService } from 'src/app/services/teas.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  tea?: ITea;
  productId?: string;
  
  private route = inject(ActivatedRoute)
  private teasService = inject(TeasService)

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') ?? '';
    this.teasService.getTea(this.productId).subscribe({
      next: (res: any) => {
        this.tea = res
      },
      error: (err) => {
        console.error('Error al obtener el té: ', err)
      }
    });
  }
}