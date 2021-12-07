import { Product } from './../shared/models/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getElements(): Observable<any[]> {
    return this.httpClient.get<any[]>(`api/products`);
  }

  postProducts(product: Product): Observable<Product> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient.post<Product>(`api/products`, product, options);
  }
}
