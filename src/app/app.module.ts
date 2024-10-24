import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { InvestmentResultsComponent } from './investment-results/investment-results.component';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [CommonModule, BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
