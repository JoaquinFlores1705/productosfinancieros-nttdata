import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormRegisterProductComponent } from 'src/app/components/form-register-product/form-register-product.component';
import { FinancialProductsService } from 'src/app/services/financial.products.service';
import { of, throwError } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: FinancialProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule,RouterModule.forRoot([]),],
      declarations: [RegisterComponent, FormRegisterProductComponent]
    });
    service = TestBed.inject(FinancialProductsService);
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register createProduct ok', () => {

    const productcreate =
      {
          id: "trj-crdjp",
          name: "Tarjetas de credito",
          description: "Tarjeta de consumo bajo modalidad de credito",
          logo: "https://www.zarla.com/images/zarla-stock-asesores-1x1-2400x2400-20210603-r8cqy98vt3yxdkctpmhm.png",
          date_release: "2023-10-26T00:00:00.000+00:00",
          date_revision: "2024-10-26T00:00:00.000+00:00"
      };

    const spyProducts =  spyOn((component as any).financialService,  "create").and.returnValue(of(productcreate));
    component.addProduct(productcreate);
    expect(component.error).toEqual('');
  });

  it('register createProduct error', () => {
    const productcreate =
      {
          id: "trj-crdjp",
          name: "Tarjetas de credito",
          description: "Tarjeta de consumo bajo modalidad de credito",
          logo: "https://www.zarla.com/images/zarla-stock-asesores-1x1-2400x2400-20210603-r8cqy98vt3yxdkctpmhm.png",
          date_release: "2023-10-26T00:00:00.000+00:00",
          date_revision: "2024-10-26T00:00:00.000+00:00"
      };

    const errorResponse = new HttpErrorResponse({
      error: 'Header ‘authorId’ is missing',
      status: 400
    });

    const spyProducts =  spyOn((component as any).financialService,  "create").and.returnValue(throwError(() => {
      return errorResponse
    }));
    component.addProduct(productcreate);
    expect(component.error).toEqual(errorResponse.error);
  });

  it('register updateProduct ok', () => {

    const productupdate =
      {
          id: "trj-crdjp",
          name: "Tarjetas de credito",
          description: "Tarjeta de consumo bajo modalidad de credito",
          logo: "https://www.zarla.com/images/zarla-stock-asesores-1x1-2400x2400-20210603-r8cqy98vt3yxdkctpmhm.png",
          date_release: "2023-10-26T00:00:00.000+00:00",
          date_revision: "2024-10-26T00:00:00.000+00:00"
      };

    const spyProducts =  spyOn((component as any).financialService,  "update").and.returnValue(of(productupdate));
    component.updateProduct(productupdate);
    expect(component.error).toEqual('');
  });

  it('register updateProduct error', () => {
    const productupdate =
      {
          id: "trj-crdjp",
          name: "Tarjetas de credito",
          description: "Tarjeta de consumo bajo modalidad de credito",
          logo: "https://www.zarla.com/images/zarla-stock-asesores-1x1-2400x2400-20210603-r8cqy98vt3yxdkctpmhm.png",
          date_release: "2023-10-26T00:00:00.000+00:00",
          date_revision: "2024-10-26T00:00:00.000+00:00"
      };

    const errorResponse = new HttpErrorResponse({
      error: 'Header ‘authorId’ is missing',
      status: 400
    });

    const spyProducts =  spyOn((component as any).financialService,  "update").and.returnValue(throwError(() => {
      return errorResponse
    }));
    component.updateProduct(productupdate);
    expect(component.error).toEqual(errorResponse.error);
  });
});
