import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(public service: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId: string = this.route.snapshot.paramMap.get('code');
    this.service.getProductCode(productId).subscribe(p => {
    this.product = p;
    });
  }

}
