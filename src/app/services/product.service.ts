import { Injectable } from '@angular/core';
import { Product } from './../models/product';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    const p1 = new Product('01', 'Name 01', 10000.0, 3, true, 'aaaaa');
    const p2 = new Product('02', 'Name 02', 200.5, 4, false, 'bbbb');
    const p3 = new Product('03', 'Name 03', 300.75, 5, true, 'cccc');
    return of([p1, p2, p3]);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
}
