import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    component: ProductSearchComponent,
  },
  {
    path: 'register',
    component: ProductRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
