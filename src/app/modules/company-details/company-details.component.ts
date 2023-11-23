import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../core/models/company";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company!: Company;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (companyInfo: any) => {
        this.company = companyInfo.data;
      });
  }

  toggleDescription(brand: any): void {
    brand.showFullDescription = !brand.showFullDescription;
  }
}
