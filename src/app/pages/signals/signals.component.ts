import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  reqresService = inject(ReqresService);

  get people() {
    return this.reqresService.people()
  }  

  goToPage(page: number) {

  }

  //TODO: implementar un update de signal
  //TODO: implementar un effect de signal
}
