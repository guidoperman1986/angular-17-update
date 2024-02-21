import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-number-formatter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-formatter.component.html',
  styleUrl: './number-formatter.component.css',
  providers: [CurrencyPipe],
})
export class NumberFormatterComponent {
  result = '';

  constructor(private currencyPipe: CurrencyPipe) {}

  formatNumber(distance: string) {
    const justNumbers = distance.replaceAll('.', '');

    const numberTransformed =
      this.currencyPipe.transform(justNumbers, '', '', '0.0') || '';

    console.log(numberTransformed);
    const numbersWithDots = numberTransformed.replaceAll(',', '.')

    this.result = numbersWithDots;

  }
}
