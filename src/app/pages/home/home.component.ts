import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../../services/products.service';
import { Database, ref, onValue } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  constructor(private db: Database) { }

  ngOnInit() {
    const dbRef = ref(this.db, '/Items');
    onValue(dbRef, (snapshot) => {
      this.items = snapshot.val();
      console.log(this.items)
    });
  }
}