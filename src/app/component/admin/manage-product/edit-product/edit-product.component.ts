import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { CategoryEntity } from 'src/app/entity/category/category-entity';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:ProductEntity = new ProductEntity();
  categoryId:number;
  categories:CategoryEntity[] = [];
  selectedFile: File = null;

  constructor(private productService:ProductService, private categoryService:CategoryService, private activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {

     let id = +this.activatedRoute.snapshot.params['id'];

    if(id){
        console.log("ID: "+ id);
        this.getProductById(id);
        
    }

    this.getCategories();
  }

  /* Get product base on id from rest api */
  getProductById(id:number){
    this.productService.getProductById(id).subscribe(
      res =>{
        this.product = res;
      }
    );

  }

  /*Retrieve all categories from server */
  getCategories(){
    this.categoryService.getCategories().subscribe(
      res =>{
        this.categories = res;
      }
    );
  }

  findCategoryById(id:number){
    for(let category of this.categories){
       if(id == category.id){
        return category;
       }
    }

    return null;
  }

  /*Add new product to server*/
  saveProduct(product:ProductEntity){
    this.productService.saveProduct(product).subscribe(
      res =>{
        console.log("Post product response", res);
      }
    )
  }

  /*Update product on sever*/
  updateProduct(product:ProductEntity){
    this.productService.updateProduct(product).subscribe(
      res => {
        console.log("Update Product " + JSON.stringify(res));
      }
    )
  }

  editProduct(form:NgForm){
    console.log(`After code test ${JSON.stringify(this.product)}`);

    let value = form.value;

    this.product.name = value.name;
    this.product.price = value.price;
    
    let category = this.findCategoryById(this.categoryId);
    this.product.category = category;

    this.product.imgUrl = "http://img.com";
    if(this.product.pid !== undefined){
      console.log(this.product.pid + " has property ID");
      this.updateProduct(this.product);
    }else{
      console.log("Doesn't have property ID" + JSON.stringify(this.product));
      this.saveProduct(this.product);
    }
      
    console.log(`After code test ${JSON.stringify(this.product)}`);

    // if(this.product.pid === 0){
    //   //this.product.id = this.productService.getProducts().length;
    // }
    // this.productService.saveProduct(this.product);

  }

  onFileSelected(event){
    this.selectedFile = event.target.file[0];
  }

}
