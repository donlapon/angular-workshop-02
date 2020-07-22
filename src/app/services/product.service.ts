import { Injectable } from '@angular/core';
import { Product, mockProduct } from './../models/product';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return of(mockProduct);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }

  getProductCode(code: string): Observable<Product> {
    return of(mockProduct.filter(p => p.code === code)[0]);
  }
}
