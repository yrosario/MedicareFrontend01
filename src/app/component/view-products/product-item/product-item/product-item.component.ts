import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:ProductEntity;

  constructor(private activedRoute:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
   let paramValue = this.activedRoute.snapshot.paramMap.get("id");

    if(paramValue !== null){
      this.product = this.findProduct(paramValue);
    }
  }

  private findProduct(paramValue){

    for(let product of this.productService.getProducts()){
      console.log(paramValue == product.id);
      if(product.id == paramValue){
        return product;
      }
    }

    return null;
  }
}
