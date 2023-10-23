import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { TableFinancialProductsComponent } from './components/table-financial-products/table-financial-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { FormRegisterProductComponent } from './components/form-register-product/form-register-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableFinancialProductsComponent,
    RegisterComponent,
    FormRegisterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
