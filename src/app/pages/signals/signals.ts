import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-signals',
  imports: [MatCardModule],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
signals = [
  {
    stockName: 'RELIANCE',
    signal: 'BUY',
    entry: 3100,
    target: 3200,
    stopLoss: 3050,
    confidence: 81
  }
];
}
