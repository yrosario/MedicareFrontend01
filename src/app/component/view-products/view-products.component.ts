import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }

}
