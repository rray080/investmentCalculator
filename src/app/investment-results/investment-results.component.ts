import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  //results = this.investment.resultsData().readOnly();
  results = computed(() => this.investmentService.resultsData()); //this will be readonly data
  // get results() {//direct data can be changed
  //   return this.investmentService.resultsData;
  // }
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
}
