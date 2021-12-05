import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ProductRegisterComponent, ProductSearchComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ProductRoutingModule,
    HttpClientModule,
  ],
})
export class ProductModule {}
