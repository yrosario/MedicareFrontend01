import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product;
  categories = [];

  constructor(private productService:ProductService, private categoryService:CategoryService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];

    console.log("ID: "+ id);
    this.product = this.productService.findProductById(id);
    this.categories = this.categoryService.getCategories();
  }

  editProduct(form:NgForm){

    const value = form.value;

    this.product.name = value.name;
    this.product.category = value.category;
    this.product.price = value.price;
    this.product.qty = value.qty;

    this.productService.save(this.product);

  }

}
