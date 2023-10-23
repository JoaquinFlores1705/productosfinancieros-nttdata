import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FinancialProduct } from 'src/app/models/financial-product-model';

@Component({
  selector: 'app-table-financial-products',
  templateUrl: './table-financial-products.component.html',
  styleUrls: ['./table-financial-products.component.css']
})
export class TableFinancialProductsComponent {

  select: number = 5;
  @Input() public products:FinancialProduct[] = [];
  @Output() editProductEvent = new EventEmitter<string>();
  @Output() deleteProductEvent = new EventEmitter<string>();
  

  moreOptions(id:string){
    let elementsMore = document.querySelectorAll("[class^='action-id-']")
    console.log(elementsMore)
    elementsMore.forEach((e) => {
      if(!e.classList.contains(`action-id-${id}`))
        e.classList.add("hidden")
    })
    let elementMore = document.querySelector(`.action-id-${id}`)
    console.log(elementMore)
    if(elementMore!.classList.contains("hidden"))
      elementMore!.classList.remove('hidden')
    else
      elementMore!.classList.add('hidden')
  }

  Edit(id:string){
    this.editProductEvent.emit(id);
  }

  Delete(id:string){
    this.deleteProductEvent.emit(id);
  }

}
