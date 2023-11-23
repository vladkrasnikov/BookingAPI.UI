import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../core/models/company";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company!: Company;
  @ViewChild('matCardDiv') matCardDiv: ElementRef | undefined
  @Input() selected: boolean = false;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (companyInfo: any) => {
        console.log(companyInfo);
        this.company = companyInfo.data;
      });
  }
  open = false;

  handleOnClick() {
    // this.onClick.emit(this.company.id);
  }

  handleOnDelete(event: Event) {
    event.stopPropagation();
    // this.onDelete.emit(this.brand.id);
  }

  handleOnEdit(event: Event) {
    event.stopPropagation();
    this.onEdit.emit();
    this.open = true;
  }

  handleCloseModal() {
    this.open = false;
  }

  toggleDescription(brand: any): void {
    brand.showFullDescription = !brand.showFullDescription;
  }
}
