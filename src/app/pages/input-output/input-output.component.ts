import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  //signals: true,
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule],
  inputs: ['inputInComponent: inputAlias'],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export class InputOutputComponent {
  @Input({ alias: 'text', required: true, transform: trimText }) textToTrim!: string;
  @Input({ alias: 'width', required: true, transform: toNumber }) width!: string | number;
  //signalInput = input<string>();
  end = signal<number>(0);

  get typeOfVariable() {
    return typeof this.width;
  }
}

function trimText(value: string) {
  return value.trim();
}

function toNumber(value: string | number) {
  return typeof value === 'number' ? value : parseInt(value);
}
