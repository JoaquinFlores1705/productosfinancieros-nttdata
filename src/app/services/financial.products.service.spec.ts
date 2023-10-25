import { TestBed } from '@angular/core/testing';

import { FinancialProductsService } from './financial.products.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('FinancialProductsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: FinancialProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post','put','delete']);
    service = TestBed.inject(FinancialProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected products', () => {

    const expectedProducts = [
      {
          id: "trj-crdjp",
          name: "Tarjetas de credito",
          description: "Tarjeta de consumo bajo modalidad de credito",
          logo: "https://www.zarla.com/images/zarla-stock-asesores-1x1-2400x2400-20210603-r8cqy98vt3yxdkctpmhm.png",
          date_release: "2023-10-26T00:00:00.000+00:00",
          date_revision: "2024-10-26T00:00:00.000+00:00"
      }];

    httpClientSpy.get.and.returnValue(of(expectedProducts));

    service.get().subscribe({
      next: (r) => { 
        expect(r.length).toBe(1);
        expect(r[0].name).toBe('Tarjetas de credito') ;
      },
      error: (e) => {}
    });


  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: "Header 'authorId' is missing",
      status: 404,
    });

    httpClientSpy.get.and.returnValue(throwError(() => {
      return errorResponse
    }));

    service.get().subscribe({
      next: (r) => { 
      },
      error: (e) => { expect(e.error).toBe("Header 'authorId' is missing") }
    });

  });
});
