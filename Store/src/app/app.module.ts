import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   

import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { SortbyProductsPipe } from './pipes/sortby-products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ProductComponent,
    ProductDetailsComponent,
    FilterProductsPipe,
    SortbyProductsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
