import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppLayoutModule} from "./layout/app-layout.module";
import { CompanyListComponent } from './modules/company-list/company-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
  ],
  imports: [
    AppLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
