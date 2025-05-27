import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-asset-pie-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './asset-pie-chart.component.html',
  styleUrls: ['./asset-pie-chart.component.scss']
})
export class AssetPieChartComponent {
  @Input() pieData: { assetType: string; value: number }[] = [];

  get pieChartData(): ChartData<'pie', number[], string> {
    return {
      labels: this.pieData.map(d => d.assetType),
      datasets: [
        {
          data: this.pieData.map(d => d.value),
          backgroundColor: [
            '#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'
          ],
        }
      ]
    };
  }

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };
}
