import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Company} from "../../models/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private _baseUrl: string = `${environment.apiBaseUrl}company/`;
  constructor(private httpClient: HttpClient) { }

  get companyList(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this._baseUrl);
  }
  getCompanyById(id: number): Observable<Company> {
    const url = `${this._baseUrl}22884528-95ed-423a-b6da-6ec0b885cced`;
    // console.log(url);
    return this.httpClient.get<Company>(url);
  }
}
