import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const MODULES = [
  RouterOutlet,
  FooterComponent,
  NavbarComponent
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MODULES ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
