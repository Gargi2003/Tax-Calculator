import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent {
  @Output() goToDeductionTab: EventEmitter<void> = new EventEmitter<void>();

}
