import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../core/shared/services/company.service";
import {Company} from "../../core/models/company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public _companyList: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.companyList.subscribe((data: Company[]) => {
      this._companyList = data;
    });
  }

}
