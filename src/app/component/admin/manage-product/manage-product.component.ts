import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products = [];
  c
  constructor(private productService:ProductService, private router:Router ) { }

  ngOnInit(): void {

    this.products = this.productService.getProducts();
    
  }

  deleteProductById(id:number){
    
    this.productService.deleteProductById(id);
    console.log(this.products);
    this.products = this.productService.getProducts()
  }

  navigateProductEdit(id?){
    this.router.navigate([`admin/manage-products/edit-product/${id}`]);
  }

}
