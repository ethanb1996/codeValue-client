import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../types/product';

@Pipe({
  name: 'sortbyProducts'
})
export class SortbyProductsPipe implements PipeTransform {

  private sortFunctions: { [key: string]: (a: Product, b: Product) => number } = {
    name: (a: Product, b: Product) => a.name.localeCompare(b.name),
    creationDate: (a: Product, b: Product) => (a.creationDate!.getTime() - b.creationDate!.getTime())
  };

  transform(products: (Product[] | null), query: string): Product[] {
    console.log(query);
    
    if (!products || !query || !this.sortFunctions[query]) {
      return products || [];
    }

    products.sort((a, b) => this.sortFunctions[query](a, b));
    return products;    
  }

}
