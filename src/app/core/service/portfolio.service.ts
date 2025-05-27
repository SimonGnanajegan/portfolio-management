import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PortfolioData } from '../models/portfolio-data.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

   portfolioDataSubject = new BehaviorSubject<PortfolioData>({
    summeryItem: [
      { title: 'Total Investment', value: 50000 },
      { title: 'Current Value', value: 65000 },
      { title: 'Profit / Loss', value: 15000 }
    ],
    assetPieData: [
      { assetType: 'Stocks', value: 30000 },
      { assetType: 'Gold', value: 20000 },
      { assetType: 'Mutual Funds', value: 15000 }
    ],
    chatData: [50000, 53000, 56000, 62000, 65000]
  });

}
