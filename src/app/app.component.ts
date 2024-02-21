import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReqresService } from './services/reqres.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavBar } from './interfaces/navbar.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-update';
  navItems: NavBar[] = [{
    title: 'Inputs and Outputs',
    url: 'input-output'
  },
  {
    title: 'Signals',
    url: 'signals'
  },
  {
    title: 'Number formater',
    url: 'number-formater'
  }
]

  constructor(private reqResService: ReqresService) {
  }
}
