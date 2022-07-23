import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryEntity } from 'src/app/entity/category/category-entity';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:{pid:number,name:string,category:CategoryEntity,qty:number,price:number, imgUrl:string}=
          {pid:0, name:"name",category:null,qty:-1,price:-1,imgUrl:""};
  categories = [];

  constructor(private productService:ProductService, private categoryService:CategoryService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

     let id = +this.activatedRoute.snapshot.params['id'];

    if(id){
        console.log("ID: "+ id);
        this.product = this.productService.findProductById(id);
        
    }

    this.categories = this.categoryService.getCategories();
  }

  editProduct(form:NgForm){
    
    const value = form.value;

    this.product.name = value.name;
    this.product.category = value.category;
    this.product.price = value.price;
    this.product.qty = value.qty;

    if(this.product.pid === 0){
      //this.product.id = this.productService.getProducts().length;
    }
    this.productService.save(this.product);

  }

}
