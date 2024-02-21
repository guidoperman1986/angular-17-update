import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from '../input-output/input-output.component';

@Component({
  selector: 'app-father-components',
  standalone: true,
  imports: [CommonModule, InputOutputComponent],
  templateUrl: './father-components.component.html',
  styleUrl: './father-components.component.css'
})
export class FatherComponentsComponent {
  textToTrim = '     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quibusdam ratione temporibus officia maxime quod, earum nam eos adipisci, beatae assumenda dolore molestias aut aliquid! Nam itaque ipsum obcaecati, maxime earum eaque impedit eveniet quo similique expedita consequuntur, at rem deleniti numquam quam, neque adipisci. Maxime magnam quia in est.'


}
