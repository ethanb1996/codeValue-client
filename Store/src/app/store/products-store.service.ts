import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../types/product';
import { PRODUCTS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {

  private products$ = new BehaviorSubject<Product[]>(PRODUCTS)
  
  constructor() {}

  getProducts(): Observable<Product[]>{
    return this.products$.asObservable();
  }
  setProducts(products : Product[]):void{
    this.products$.next(products);
  }
  getProductsSnapShot(): Product[]{
    return this.products$.getValue();
  }
}
