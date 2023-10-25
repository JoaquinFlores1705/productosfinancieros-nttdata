import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TableFinancialProductsComponent } from 'src/app/components/table-financial-products/table-financial-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { of, throwError } from 'rxjs';
import { FinancialProductsService } from 'src/app/services/financial.products.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let service: FinancialProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot([])],
      declarations: [MainComponent, TableFinancialProductsComponent],
    });
    service = TestBed.inject(FinancialProductsService);
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('main getProducts ok', () => {

    const expectedProducts = [
      {
          id: "trj-crdjp",
          name: "Tarjetas de credito",
          description: "Tarjeta de consumo bajo modalidad de credito",
          logo: "https://www.zarla.com/images/zarla-stock-asesores-1x1-2400x2400-20210603-r8cqy98vt3yxdkctpmhm.png",
          date_release: "2023-10-26T00:00:00.000+00:00",
          date_revision: "2024-10-26T00:00:00.000+00:00"
      }];

    const spyProducts =  spyOn((component as any).financialService,  "get").and.returnValue(of(expectedProducts));
    component.ngOnInit();
    expect(component.products).toEqual(expectedProducts);
  });

  it('main getProducts error', () => {

    const errorResponse = new HttpErrorResponse({
      error: 'Header ‘authorId’ is missing',
      status: 400
    });

    const spyProducts =  spyOn((component as any).financialService,  "get").and.returnValue(throwError(() => {
      return errorResponse
    }));
    component.ngOnInit();
    expect(component.error).toEqual(errorResponse.error);
  });

  it('main deleteproduct error', () => {

    const errorResponse = new HttpErrorResponse({
      error: 'You must be the owner',
      status: 404
    });

    const spyProducts =  spyOn((component as any).financialService,  "delete").and.returnValue(throwError(() => {
      return errorResponse
    })
    );
    component.DeleteProduct('trj');
    expect(component.error).toEqual(errorResponse.error);
  });

});
