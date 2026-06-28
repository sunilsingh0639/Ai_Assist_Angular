import { Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AiMarket } from '../../core/services/ai-market';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltip
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private aiService = inject(AiMarket);
  private spinner = inject(NgxSpinnerService);
  predictions: any[] = [];
  buyCount = 0;
  sellCount = 0;
  holdCount = 0;
  highImpactCount = 0;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'company',
    'sector',
    'recommendation',
    'confidence',
    'impact',
    'reason',
    'created_on'
  ];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {

    this.loadPredictions();

  }

  ngAfterViewInit(): void {

    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

  }
  loadPredictions() {
    this.spinner.show();
    this.aiService.getTodayPredictions().subscribe({

      next: (res: any) => {
        this.buyCount = res.filter((x: any) => x.recommendation === 'BUY').length;

        this.sellCount = res.filter((x: any) => x.recommendation === 'SELL').length;

        this.holdCount = res.filter((x: any) => x.recommendation === 'HOLD').length;

        this.highImpactCount = res.filter((x: any) => x.impact === 'HIGH').length;
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.spinner.hide();
      },

      error: (err) => {

        console.log(err);
        this.spinner.hide();

      }

    });

  }
  applyFilter(event: Event) {

    const value = (event.target as HTMLInputElement).value;

    this.dataSource.filter = value.trim().toLowerCase();

  }

  chipColor(value: string) {

    if (!value) return '';

    value = value.toUpperCase();

    if (value == 'BUY')
      return 'buy-chip';

    if (value == 'SELL')
      return 'sell-chip';

    return 'hold-chip';

  }
}
