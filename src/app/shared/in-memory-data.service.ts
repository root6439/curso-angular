import { Product } from './models/Product';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  products: Product[] = [
    {
      id: 1,
      name: 'Senhor dos anéis',
      price: 59.9,
    },
    {
      id: 2,
      name: 'Notebook',
      price: 3999.9,
    },
    {
      id: 3,
      name: 'Geladeira',
      price: 349.9,
    },
    {
      id: 4,
      name: 'Cook-top',
      price: 79.9,
    },
    {
      id: 5,
      name: 'Fogão',
      price: 599.9,
    },
  ];

  createDb() {
    return { products: this.products };
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
