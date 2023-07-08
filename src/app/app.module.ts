import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxCalculateComponent } from './tax-calculate/tax-calculate.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxCalculateComponent,
    BasicDetailsComponent,
    IncomeDetailsComponent,
    DeductionsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
