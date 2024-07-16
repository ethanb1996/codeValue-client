import { Component, Input } from '@angular/core';
import { EMPTY_PRODUCT, Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product : Product | null = EMPTY_PRODUCT;

  constructor(){}

  onSubmit(){}
}
