import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public productForm: FormGroup;
 


  constructor(private productsHandlerService: ProductsHandlerService,private fb: FormBuilder) { 
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],   // Name: Required, max length 30
      description: ['', Validators.maxLength(200)],                  // Description: max length 200
      price: [null, [Validators.required, Validators.min(0.01)]],    // Price: Required, must be greater than zero
      creationDate: ['', Validators.required]                        // Creation Date: Required
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.updateProduct = {...this.updateProduct, ...changes['product'].currentValue };
      this.productForm.patchValue(this.updateProduct);
    }
  }
  onSubmit(){

    if (this.productForm.valid) {
      this.updateProduct = {...this.updateProduct,  ...this.productForm.value};

      if (this.updateProduct.id) {
        this.productsHandlerService.update(this.updateProduct);
      } else {
        this.productsHandlerService.add(this.updateProduct);
      }
    }
  }
}
