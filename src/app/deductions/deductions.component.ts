import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.css']
})
export class DeductionsComponent {
  @Output() goToSummaryTab: EventEmitter<void> = new EventEmitter<void>();

}
