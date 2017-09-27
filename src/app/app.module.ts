import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import { TableComponent } from './table/table.component';
import { MonthlyPageComponent } from './monthly-page/monthly-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MonthlyPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_PROVIDERS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
