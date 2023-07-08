import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-calculate',
  templateUrl: './tax-calculate.component.html',
  styleUrls: ['./tax-calculate.component.css']
})
export class TaxCalculateComponent {
 
  activeTab: string = 'basic';

  changeTab(tab: string) {
    this.activeTab = tab;
  }
  goToIncomeTab() {
    this.activeTab = 'income';
  }
  goToDeductionTab(){
    this.activeTab = 'deduction';
  }
  goToSummaryTab(){
    this.activeTab = 'summary';
  }
  
}
