import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { MonthlyPageComponent } from './monthly-page/monthly-page.component';

import { BsRootModule } from 'ngx-bootstrap';
import { BalanceRowTableComponent } from './balance-row-table/balance-row-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyPageComponent,
    BalanceRowTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_PROVIDERS,
    BsRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
