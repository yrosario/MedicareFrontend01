import { Injectable } from '@angular/core';
import { CategoryEntity } from '../entity/category/category-entity';
import { ProductEntity } from '../entity/product/product-entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [new ProductEntity(1,"Vitamin c", new CategoryEntity(1,"vitamin"),8.88,55,"https://via.placeholder.com/150"),
              new ProductEntity(2,"Vitamin B", new CategoryEntity(1,"vitamin"),10.99,23,"https://via.placeholder.com/150"),
              new ProductEntity(3,"Aspirin", new CategoryEntity(2,"Pain Relief"),15.99,14,"https://via.placeholder.com/150"),
              new ProductEntity(4,"Flu Cough Syrup", new CategoryEntity(3,"Flu/Cold Medicine"),10.99,23,"https://via.placeholder.com/150"),
              new ProductEntity(5,"Nasal Spray", new CategoryEntity(4,"Congestion Relief"),3.45,43,"https://via.placeholder.com/150"),
              new ProductEntity(6,"Vitamin F", new CategoryEntity(1,"vitamin"),10.55,45,"https://via.placeholder.com/150")];

  constructor() {

    
   }

   getProducts(){
      return this.products;
   }

   deleteProductById(id:number){
    for(let i = 0; i < this.products.length; i++){
      if(id === this.products[i].id){
        this.products.splice(i,1);
        console.log(this.products);
        break;
      }
    }
   }

   findProductById(id){
    for(let product of this.products){
      if(product.id === id){
        return product;     
       }
    }
    return null;
   }


   save(product){
    for(let i = 0; i < this.products.length; i++){
      if(product.id === this.products[i].id)
      {
        this.products[i] = product;
        return;
      }
    }

    this.products.push(product);
   }
   
}
