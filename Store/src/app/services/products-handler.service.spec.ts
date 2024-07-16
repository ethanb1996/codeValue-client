import { TestBed } from '@angular/core/testing';

import { ProductsHandlerService } from './products-handler.service';

describe('ProductsHandlerService', () => {
  let service: ProductsHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
