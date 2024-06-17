import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({"projectId":"teab-ba9c0","appId":"1:211599708909:web:75a9d6a44df21c42b1b2e4","databaseURL":"https://teab-ba9c0-default-rtdb.firebaseio.com","storageBucket":"teab-ba9c0.appspot.com","apiKey":"AIzaSyB2rSSPoiZtduzHC-pzGBqJHmYDMBYdoHM","authDomain":"teab-ba9c0.firebaseapp.com","messagingSenderId":"211599708909","measurementId":"G-7S2QY2LN0N"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ]
};
