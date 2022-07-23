import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products:[ProductEntity];
  
  constructor(private productService:ProductService, private router:Router ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      }
    )
  }

  deleteProductById(id:number){
    
    this.productService.deleteProductById(id);
    console.log(this.products);
    this.getProducts();
  }

  navigateProductEdit(id?){
    this.router.navigate([`admin/manage-products/edit-product/${id}`]);
  }

}