import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.products = this.productService.getProducts();
  }

  deleteProductById(id:number){
    
    this.productService.deleteProductById(id);
    console.log(this.products);
    this.products = this.productService.getProducts()
  }

}
