import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  @Output() goToIncomeTab: EventEmitter<void> = new EventEmitter<void>();

}
