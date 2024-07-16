import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../types/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: (Product[] | null), query: string): Product[] {
    console.log(query)
    if (!products || !query) {
      return products || [];
    }
    query = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
  }
}


