import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../types/product';
import { PRODUCTS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {

  private products$ = new BehaviorSubject<Product[]>([])
  
  constructor() {
    this.loadProductsFromLocalStorage()
  }

  private loadProductsFromLocalStorage(): void {
    const products = JSON.parse(localStorage.getItem('products') || JSON.stringify(PRODUCTS));
    this.setProducts(products);
  }

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
