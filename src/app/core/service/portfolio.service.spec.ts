import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';
import { PortfolioData } from '../models/portfolio-data.model';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default portfolio data', () => {
    const data = service.portfolioDataSubject.value;

    expect(data.summeryItem.length).toBe(3);
    expect(data.summeryItem[0].title).toBe('Total Investment');
    expect(data.summeryItem[0].value).toBe(50000);

    expect(data.assetPieData.length).toBe(3);
    expect(data.assetPieData[0].assetType).toBe('Stocks');
    expect(data.assetPieData[0].value).toBe(30000);

    expect(data.chatData).toEqual([50000, 53000, 56000, 62000, 65000]);
  });

  it('should allow updating portfolio data', () => {
    const updatedData: PortfolioData = {
      summeryItem: [
        { title: 'Total Investment', value: 100000 },
        { title: 'Current Value', value: 110000 },
        { title: 'Profit / Loss', value: 10000 }
      ],
      assetPieData: [
        { assetType: 'Real Estate', value: 100000 }
      ],
      chatData: [100000, 105000, 110000]
    };

    service.portfolioDataSubject.next(updatedData);

    const currentValue = service.portfolioDataSubject.value;
    expect(currentValue.summeryItem[0].value).toBe(100000);
    expect(currentValue.assetPieData[0].assetType).toBe('Real Estate');
    expect(currentValue.chatData.length).toBe(3);
  });
});
