import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { PortfolioService } from '../../core/service/portfolio.service';
import { provideMockStore } from '@ngrx/store/testing';
import { BehaviorSubject } from 'rxjs';
import { PortfolioData } from '../../core/models/portfolio-data.model';
import { CommonModule } from '@angular/common';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockPortfolioData: PortfolioData = {
    summeryItem: [
      { title: 'Total Investment', value: 10000 },
      { title: 'Current Value', value: 15000 },
      { title: 'Profit / Loss', value: 5000 }
    ],
    assetPieData: [
      { assetType: 'Stocks', value: 7000 },
      { assetType: 'Gold', value: 3000 }
    ],
    chatData: [10000, 12000, 15000]
  };

  beforeEach(async () => {
    const portfolioServiceSpy = jasmine.createSpyObj('PortfolioService', [], {
      portfolioDataSubject: new BehaviorSubject<PortfolioData>(mockPortfolioData)
    });

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
      ],
      providers: [
        provideMockStore(),
        { provide: PortfolioService, useValue: portfolioServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize portfolioData$ with service subject', (done) => {
    component.portfolioData$.subscribe(data => {
      expect(data).toEqual(mockPortfolioData);
      done();
    });
  });
});
