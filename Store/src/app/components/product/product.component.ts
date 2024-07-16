import { Component, Input } from '@angular/core';
import { ProductsHandlerService } from 'src/app/services/products-handler.service';
import { ProductsStoreService } from 'src/app/store/products-store.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product

  constructor(private productsHandlerService:ProductsHandlerService){}

  onDelete(){
    this.productsHandlerService.delete(this.product.id!);
  }
}
