import { Injectable } from '@angular/core';
import { CategoryEntity } from '../entity/category/category-entity';
import { ProductEntity } from '../entity/product/product-entity';
import { HttpClient} from '@angular/common/http';
import { API_URL, PRODUCT } from '../contants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:[ProductEntity];

  constructor(private httpClient:HttpClient) { 
   }

   /*Retrieves all products from http://localhost:8080/api/v1/product */
  getProducts(){
    return this.httpClient.get<[ProductEntity]>(API_URL + PRODUCT);
  }

  /*Retrieves a specific product base on product id from http://localhost:8080/api/v1/product/:id */
  getProductById(id:number){
    return this.httpClient.get<ProductEntity>(API_URL+PRODUCT+"/" +id);
  }

  /* Deletes a specific product base on id from http://localhost:8080/api/v1/product/:id */
  deleteProductById(id:number){
    this.httpClient.delete(API_URL+PRODUCT+"/"+id);
  }

  saveProduct(product:ProductEntity){
    this.httpClient.post(`${API_URL}${PRODUCT}`,{observe: 'response', responseType: 'json'});
  }

  //  deleteProductById(id:number){
  //   for(let i = 0; i < this.products.length; i++){
  //     if(id === this.products[i].pid){
  //       this.products.splice(i,1);
  //       console.log(this.products);
  //       break;
  //     }
  //   }
  //  }

   findProductById(id){
    for(let product of this.products){
      if(product.pid === id){
        return product;     
       }
    }
    return null;
   }


   save(product){
    for(let i = 0; i < this.products.length; i++){
      if(product.id === this.products[i].pid)
      {
        this.products[i] = product;
        return;
      }
    }

    this.products.push(product);
   }
   
}
