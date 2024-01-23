import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { PhoneService } from './core/phone/phone.service';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { FilterPipe } from './core/filter.pipe';
import { OrderByPipe } from './core/order-by.pipe';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    FilterPipe,
    OrderByPipe,
    CheckmarkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PhoneService, routeParamsProvider],
  //bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp'])
  }
}
