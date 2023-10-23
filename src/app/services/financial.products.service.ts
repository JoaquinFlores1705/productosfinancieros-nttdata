import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { FinancialProduct } from '../models/financial-product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialProductsService {

  url: string;
  authorId: string;
  headers = new HttpHeaders();


  constructor(private http: HttpClient) { 
    this.url = environment.financialProductsUrl;
    this.authorId = environment.authorId;
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers = this.headers.set('authorId', this.authorId);
  }

  get() : Observable<FinancialProduct[]> {
    return this.http.get<FinancialProduct[]>(`${this.url}/bp/products`, {headers: this.headers});
  }

  verify(id: string) : Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/bp/products/verification?id=${id}`);
  }

  create(product: FinancialProduct):Observable<FinancialProduct>{
    console.log(product)
    return this.http.post<FinancialProduct>(`${this.url}/bp/products`, product, {headers: this.headers});
  }

  update(product: FinancialProduct):Observable<FinancialProduct>{
    return this.http.put<FinancialProduct>(`${this.url}/bp/products`, product, {headers: this.headers});
  }

  delete(id: string):Observable<string>{
    return this.http.delete<string>(`${this.url}/bp/products?id=${id}`, {headers: this.headers});
  }
}
