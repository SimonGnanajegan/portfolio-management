import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cards.component.html',
  styleUrl: './summary-cards.component.scss',
})
export class SummaryCardsComponent {
  @Input() cards = [
    { title: 'Total Investment', value: 50000 },
    { title: 'Current Value', value: 65000 },
    { title: 'Profit / Loss', value: 15000 }
  ];
}
