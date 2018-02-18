import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[];
  product: Product = {
    name:'',
    desc:'',
    price:'',
    category:'',
    tag:'',
  }
  folder:any;

  constructor(private productService: ProductService) { 
   }

  ngOnInit() {
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
    })
  }

  onSubmit(){
    if(this.product.name != '' && this.product.desc != '' && this.product.price != '' && this.product.category != '' && this.product.tag != ''){
      this.productService.addProduct(this.product);
      this.product.name = '';
      this.product.desc = '';
      this.product.price = '';
      this.product.category = '';
      this.product.tag = '';
      this.product.img = '';
    }
  }
}
