import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Investment } from '../../core/models/investment.model';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-investment-review',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButton],
  templateUrl: './investment-review.component.html',
  styleUrls: ['./investment-review.component.scss']
})
export class InvestmentReviewComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Investment,
    private dialogRef: MatDialogRef<InvestmentReviewComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
