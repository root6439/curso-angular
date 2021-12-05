import { Product } from './../../shared/models/Product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
})
export class ProductSearchComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource: Product[];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getElements().subscribe((elements: any[]) => {
      this.dataSource = elements;
    });
  }
}
