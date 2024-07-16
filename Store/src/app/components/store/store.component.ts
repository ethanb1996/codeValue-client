import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsStoreService } from 'src/app/store/products-store.service';
import { EMPTY_PRODUCT, Product } from 'src/app/types/product';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  public query:string = '';
  public sortByQuery: any = ''
  public selectedProduct$ = new BehaviorSubject<Product>(EMPTY_PRODUCT);
  
  public SORT_BY_OPTIONS = [{display:'name',col:'name'},{display:'Recently Added', col:'creationDate'}]
  constructor(public productsStoreService:ProductsStoreService){}

  onSelect(p: Product){
    this.selectedProduct$.next(p);
  }

  onAdd(){
    this.selectedProduct$.next(EMPTY_PRODUCT)
  }
}
