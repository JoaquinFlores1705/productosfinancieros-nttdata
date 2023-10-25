import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormRegisterProductComponent } from 'src/app/components/form-register-product/form-register-product.component';
import { FinancialProduct } from 'src/app/models/financial-product-model';
import { FinancialProductsService } from 'src/app/services/financial.products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  productsSearch:FinancialProduct[] = [];
  products:FinancialProduct[] = [];
  searchText: string = "";
  error: string = "";
  
  constructor(private financialService: FinancialProductsService, private router: Router){

  }

  search(){
    this.productsSearch = this.products.filter((f) => f.id.toUpperCase().includes(this.searchText.toUpperCase()) || f.name.toUpperCase().includes(this.searchText.toUpperCase()) || f.description.toUpperCase().includes(this.searchText.toUpperCase()));
  }

  ngOnInit() {
    this.financialService.get().subscribe({
      next: this.responseGetSucessfull.bind(this),
      error: this.responseGetError.bind(this)
    });
  }

  responseGetSucessfull(data: FinancialProduct[]){
    this.products = data.map((d) => {
      d.date_release = d.date_release.substring(0,10);
      d.date_revision = d.date_revision.substring(0,10);
      return d;
    });
    this.search();
  }

  responseGetError(data:HttpErrorResponse){
    console.log(data);
    this.error = "";
    this.error = data.error;
  }

  EditProduct(id:string){
    this.router.navigate(['/registro/edicion', id]);
  }

  DeleteProduct(id:string){
    this.financialService.delete(id).subscribe({
      next: this.responseDeleteSucessfull.bind(this),
      error: this.responseDeleteError.bind(this)
    });
  }

  responseDeleteSucessfull(data: string){
    this.error = "";
    this.ngOnInit();
  }

  responseDeleteError(data:HttpErrorResponse){
    console.log(data);
    this.error = "";
    this.error = data.error;
  }

}
