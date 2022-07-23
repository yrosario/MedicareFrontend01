import { Component, OnInit } from '@angular/core';
import { CategoryEntity } from 'src/app/entity/category/category-entity';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products = [];
  categories:CategoryEntity[] = [];

  constructor(private productService:ProductService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      }
    )
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      res =>{
        this.categories = res;
      }
    );
  }
}
