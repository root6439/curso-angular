import { ProductService } from './../product.service';
import { Product } from './../../shared/models/Product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css'],
})
export class ProductRegisterComponent implements OnInit {
  name = new FormControl(null, Validators.required);
  price = new FormControl(null, Validators.required);

  formCreateProduct = new FormGroup({
    name: this.name,
    price: this.price,
  });

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {}

  saveProduct(product: Product) {
    this.service.postProducts(product).subscribe((p: Product) => {
      console.log(p);
      this.router.navigate(['product/search']);
    });
  }
}
