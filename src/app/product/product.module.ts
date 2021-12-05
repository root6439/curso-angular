import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
  declarations: [ProductRegisterComponent, ProductSearchComponent],
  imports: [CommonModule],
})
export class ProductModule {}
