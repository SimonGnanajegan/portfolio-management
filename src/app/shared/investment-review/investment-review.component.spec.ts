import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentReviewComponent } from './investment-review.component';

xdescribe('InvestmentReviewComponent', () => {
  let component: InvestmentReviewComponent;
  let fixture: ComponentFixture<InvestmentReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
