import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { MonthlyPageComponent } from './monthly-page/monthly-page.component';

import { BsRootModule } from 'ngx-bootstrap';
import { BalanceRowTableComponent } from './balance-row-table/balance-row-table.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyPageComponent,
    BalanceRowTableComponent,
    MonthSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    APP_ROUTER_PROVIDERS,
    BsRootModule
  ],
  providers: [
      { provide: LOCALE_ID, useValue: 'fr-US' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
