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

  // TODO - 8. Add validation to the details pane. 
  // The save button should only be enabled if the properties contain valid values 
  // (for example, name is not empty, price is greater than zero, etc.) 
  // 1.ID (number, unique
  // 2. Name (string, up to 30 characters, mandatory) 
  // 3. Description (string, up to 200 characters, optional) 
  // 4. Price (number, larger than zero, mandatory) 
  // 5. Creation Date (Date, mandatory)


  constructor(private productsHandlerService: ProductsHandlerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.updateProduct = { ...changes['product'].currentValue };
    }
  }
  onSubmit(){
    if (this.product?.id) {
      this.productsHandlerService.update({...this.updateProduct});
    } else {
      this.productsHandlerService.add({...this.updateProduct});
    }
  }
}
