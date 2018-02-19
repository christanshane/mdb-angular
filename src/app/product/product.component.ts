import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products:any;
  id: any;

  name:any;

  constructor(
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.products = this.productService.getProductDetails(this.id);
    console.log(this.products);
  }

}
