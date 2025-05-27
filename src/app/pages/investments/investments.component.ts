import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { InvestmentReviewComponent } from '../../shared/investment-review/investment-review.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PortfolioData } from '../../core/models/portfolio-data.model';
import { PortfolioService } from '../../core/service/portfolio.service'



@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent {
  investmentForm: FormGroup;

  assetTypes = ['Stocks', 'Mutual Funds', 'Gold', 'Crypto', 'Bonds' ];
  portfolioData!: PortfolioData; 

  constructor(private fb: FormBuilder, private dialog: MatDialog, private snackBar: MatSnackBar, private portfolioService: PortfolioService) {

    this.portfolioService.portfolioDataSubject.subscribe(data => {
      this.portfolioData = data;
    });

    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      purchasePrice: [null, [Validators.required, Validators.min(0.01)]],
    });
  }

  getError(field: string): string | null {
    const control = this.investmentForm.get(field);
    if (control?.touched || control?.dirty) {
      if (control.hasError('required')) return `${this.labelMap[field]} is required`;
      if (control.hasError('min')) {
        if (field === 'quantity') return 'Quantity must be at least 1';
        if (field === 'purchasePrice') return 'Price must be greater than 0';
      }
    }
    return null;
  }

  labelMap: { [key: string]: string } = {
    assetType: 'Asset type',
    quantity: 'Quantity',
    purchasePrice: 'Purchase price',
    purchaseDate: 'Purchase date'
  };

  showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      const dialogRef = this.dialog.open(InvestmentReviewComponent, {
        data: this.investmentForm.value
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          const formValue = this.investmentForm.value;
          const investmentAmount = formValue.quantity * formValue.purchasePrice;
        
          const updatedData: PortfolioData = {
            ...this.portfolioData,
            summeryItem: [...this.portfolioData.summeryItem],
            assetPieData: [...this.portfolioData.assetPieData],
            chatData: [...this.portfolioData.chatData]
          };
        
          const existingAsset = updatedData.assetPieData.find(a => a.assetType === formValue.assetType);
          if (existingAsset) {
            existingAsset.value += investmentAmount;
          } else {
            updatedData.assetPieData.push({
              assetType: formValue.assetType,
              value: investmentAmount
            });
          }
        
          let totalInvestmentItem = updatedData.summeryItem.find(i => i.title === 'Total Investment');
          let currentValueItem = updatedData.summeryItem.find(i => i.title === 'Current Value');          
        
          if (totalInvestmentItem) totalInvestmentItem.value += investmentAmount;
          if (currentValueItem) currentValueItem.value += investmentAmount;
      
          this.portfolioService.portfolioDataSubject.next(updatedData);
          
                  this.showMessage('Investment saved!');
          this.investmentForm.reset();
        }
        
      });
    } else {
      this.investmentForm.markAllAsTouched();
    }
  }
}

