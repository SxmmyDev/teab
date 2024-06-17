import { Injectable } from '@angular/core';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = ''

  getDatabase() {
    const database = getDatabase();
    console.log(database)
  }
  
}

// import { getDatabase, ref, onValue } from "firebase/database";

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
