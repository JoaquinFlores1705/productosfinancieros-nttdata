import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormRegisterProductComponent } from './form-register-product.component';
import { FinancialProduct } from '../../models/financial-product-model';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormRegisterProductComponent', () => {
  let component: FormRegisterProductComponent;
  let fixture: ComponentFixture<FormRegisterProductComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormRegisterProductComponent]
    });

    const product : FinancialProduct= {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };

    fixture = TestBed.createComponent(FormRegisterProductComponent);
    
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('send emit form sendForm', () => {
    const product : FinancialProduct= {
      id: 'trj-crdjp',
      name: 'Prueba test',
      description: 'Descripcion test',
      logo: 'logo.jpg',
      date_release: '2022-10-01',
      date_revision: '2023-10-01'
    };

    const verificateId: (id: string) => Observable<boolean> = (id:string) => {return new Observable<boolean>((observer) => {
      setInterval(() => observer.next(false), 1000);
    })};

    component.verificateId = verificateId;
    component.registerForm.setValue(product);
    component.registerProductEvent.subscribe((productEmitter: FinancialProduct) => expect(productEmitter).toEqual(product));
    component.sendForm();
  });
});
