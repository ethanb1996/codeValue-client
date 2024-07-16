import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsHandlerService } from 'src/app/services/products-handler.service';
import { EMPTY_PRODUCT, Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnChanges{
  @Input() product!: Product;
  public updateProduct: Product = { ...EMPTY_PRODUCT };

  constructor(private productsHandlerService: ProductsHandlerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.updateProduct = { ...changes['product'].currentValue };
    }
  }
  onSubmit(){
    if (this.product?.id) {
      this.productsHandlerService.update(this.updateProduct);
    } else {
      this.productsHandlerService.add(this.updateProduct);
    }
  }
}
