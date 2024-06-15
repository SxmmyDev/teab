import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimoniesComponent } from './pages/testimonies/testimonies.component';
import { TeashopComponent } from './pages/teashop/teashop.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'teashop', component: TeashopComponent },
    { path: 'testimonies', component: TestimoniesComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
