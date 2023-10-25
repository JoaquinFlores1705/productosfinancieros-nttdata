import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFinancialProductsComponent } from './table-financial-products.component';
import { FormsModule } from '@angular/forms';

describe('TableFinancialProductsComponent', () => {
  let component: TableFinancialProductsComponent;
  let fixture: ComponentFixture<TableFinancialProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TableFinancialProductsComponent]
    });
    fixture = TestBed.createComponent(TableFinancialProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
