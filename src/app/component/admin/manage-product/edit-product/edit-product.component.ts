import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { CategoryEntity } from 'src/app/entity/category/category-entity';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { CategoryService } from 'src/app/service/category.service';
import { ImageService } from 'src/app/service/image.service';
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
  userId:number = null;

  constructor(private productService:ProductService, private categoryService:CategoryService, 
                                     private activatedRoute:ActivatedRoute, private imageService:ImageService ) { 
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
      (res:ProductEntity) =>{
        console.log("Post product response", res);
        this.product = res;
        this.saveImage(res.pid,this.selectedFile);
      }
    )
  }

  /*Update product on sever*/
  updateProduct(product:ProductEntity){
    this.productService.updateProduct(product).subscribe(
      (res:ProductEntity) => {
        console.log("Update Product " + JSON.stringify(res));
        this.saveImage(res.pid,this.selectedFile);
      }
    )
  }

  /*Save image to serve*/
  saveImage(id:number,file:File){
    
    if(file !== null){
      this.imageService.saveImage(id, this.selectedFile).subscribe(
        res =>{
          console.log(res);
        }
      );
      }
    
  }

  editProduct(form:NgForm){
    let value = form.value;

    this.product.name = value.name;
    this.product.price = value.price;
    this.product.qty = value.qty;
    
    let category = this.findCategoryById(this.categoryId);
    this.product.category = category;

    
    if(this.product.pid !== undefined){
      this.updateProduct(this.product);
    }else{
      this.saveProduct(this.product);
    }
      

  }

  onFileSelected(event){
    console.log(event);

    this.selectedFile = <File>event.target.files[0];
  }

}
