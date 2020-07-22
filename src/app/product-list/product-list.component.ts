import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData = '';

  constructor() {}

  ngOnInit(): void {
    const p1 = new Product('01', 'Name 01', 10000.0, 3, true, 'aaaaa');
    const p2 = new Product('02', 'Name 02', 200.5, 4, false, 'bbbb');
    const p3 = new Product('03', 'Name 03', 300.75, 5, true, 'cccc');
    this.products.push(p1, p2, p3);
  }
}
