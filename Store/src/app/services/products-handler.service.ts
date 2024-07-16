import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { ProductsStoreService } from '../store/products-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsHandlerService {

  constructor(private productsStoreService:ProductsStoreService) { }

  delete(id:number){
    const products = this.productsStoreService.getProductsSnapShot();
    const productToDeleteIndex = products.findIndex((p:Product) => p.id === id);
    if(productToDeleteIndex > -1){
      products.splice(productToDeleteIndex,1)
      this.productsStoreService.setProducts(products);
    }
  }

  add(p:Product){
    let products = this.productsStoreService.getProductsSnapShot();
    p.id = products.length+1;
    p.creationDate = new Date();
    products.push(p)
    this.productsStoreService.setProducts(products);
  }

  update(productToUpdate:Product){
    let products = this.productsStoreService.getProductsSnapShot();
    const productToDeleteIndex = products.findIndex((p:Product) => p.id === productToUpdate.id);
    if(productToDeleteIndex > -1){
      products[productToDeleteIndex] = productToUpdate;
      this.productsStoreService.setProducts(products);
    }
  }
}
