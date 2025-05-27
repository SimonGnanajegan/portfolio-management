import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCardsComponent } from '../../shared/summary-cards/summary-cards.component';
import { PerformanceChartComponent } from '../../shared/performance-chart/performance-chart.component';
import { PortfolioService } from '../../core/service/portfolio.service';
import { SummaryItem } from '../../core/models/summery-item.model'
import { Investment } from '../../core/models/investment.model'
import { ApiResponse } from '../../core/models/api-response.model'
import { AssetPieChartComponent } from '../../shared/asset-pie-chart/asset-pie-chart.component';
import { selectSummaryData, selectChartData, selectPieData } from '../../store/portfolio/portfolio.selectors';
import { Store } from '@ngrx/store';
import { PortfolioData } from '../../core/models/portfolio-data.model';
import { ChartData } from 'chart.js';
import { AssetPieData } from '../../core/models/asset-pie-data.model';
import { loadPortfolioData } from '../../store/portfolio/portfolio.actions';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SummaryCardsComponent, PerformanceChartComponent, AssetPieChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  pieData:  AssetPieData[]=[];
  chartData : number[] = [];
  summaryData: SummaryItem[] = [];

  portfolioData$: Observable<PortfolioData>;

  // summaryData$: Observable<SummaryItem[]>;
  // chartData$: Observable<number[]>;
  // pieData$: Observable<AssetPieData[]>;
  

  constructor(private portfolioService: PortfolioService, private store: Store) {
    // this.summaryData$ = this.store.select(selectSummaryData);
    // this.chartData$ = this.store.select(selectChartData);
    // this.pieData$ = this.store.select(selectPieData);
    this.portfolioData$ = this.portfolioService.portfolioDataSubject;
  }
  ngOnInit(): void {
    // this.store.dispatch(loadPortfolioData());
  }

  
}
