import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from '../../interfaces/navbar.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input({ required: true }) navItems!: NavBar[];
}
