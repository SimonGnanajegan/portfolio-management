import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-performance-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss'] 
})
export class PerformanceChartComponent {
  @Input() portfolioData: number[] = [10000, 12000, 13000, 12500, 14000];

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: this.portfolioData,
        label: 'Portfolio Value',
        fill: true,
        tension: 0.3,
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.3)'
      }
    ]
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true }
    }
  };
  
}
