import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products = [];
  categories = [];

  constructor(private productService:ProductService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }

  getCategories(){
    this.categories = this.categoryService.getCategories();
  }
}
