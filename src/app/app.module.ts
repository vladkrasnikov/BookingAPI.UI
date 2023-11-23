import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppLayoutModule} from "./layout/app-layout.module";
import { CompanyListComponent } from './modules/company-list/company-list.component';
import {NgForOf} from "@angular/common";
import {SharedModule} from "./core/shared/shared.module";
import {AppModulesModule} from "./modules/app-modules.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppLayoutModule,
    AppRoutingModule,
    SharedModule,
    AppModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
