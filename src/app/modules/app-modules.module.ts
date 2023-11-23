import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {CompanyListComponent} from "./company-list/company-list.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule, NgForOf} from "@angular/common";
import { CompanyDetailsComponent } from './company-details/company-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule,
    MatDividerModule,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule
  ],
  exports: []
})
export class AppModulesModule { }
