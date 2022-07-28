import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';
import { ProductEntity } from '../entity/product/product-entity';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: ProductEntity[], oper:string, value:string): ProductEntity[] {
    console.log("FROM PIPE "+ oper);
    if(oper.toLowerCase() === "search"){
      return this.searchFilter(products,value);
    }else if(oper.toLocaleLowerCase() == "category"){ 
      return this.categoryFilter(products,value);
    }
    

    return products;
  }

  categoryFilter(products: ProductEntity[], filterText:string):ProductEntity[]{
    if(products.length === 0){
      return products;
    }else if(filterText === '')
    {
      return products.slice(0,10);
    }else{
      return products.filter(product =>{
        return product.category.name === filterText;
      });
    }
  }

  searchFilter(products: ProductEntity[], filterText:string):ProductEntity[]{
    if(products.length === 0 || filterText === ""){
      return products;
    }else{
      return products.filter(product =>{
        return product.name.toLocaleLowerCase() === filterText.toLowerCase();
      })
    }
  }

}