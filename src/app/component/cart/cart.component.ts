import { Component, OnInit } from '@angular/core';
import { CartEntity } from 'src/app/entity/cart/cart-entity';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = new CartEntity();
  total = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

    this.sumTotal();

  }

  addProductToCart(product:ProductEntity){
    this.cartService.setCart(product);
  }

  sumTotal(){
    this.total = 0;
    for(let product of this.cart.products){
      this.total += product.qty + product.price;
    }
  }

  removeItem(id){
    
    for(let i = 0; i < this.cart.products.length; i++){
      
      let product = this.cart.products[i];
      if(product.id === id){
        if(product.qty > 0){
          product.qty--;
        }else{
          this.cart.products.splice(i,1);
         
        }
      }

    }

    this.sumTotal();
  }

  addItem(id){
    
    for(let i = 0; i < this.cart.products.length; i++){
      
      let product = this.cart.products[i];
      if(product.id === id){
        product.qty++;
      }

    }

    this.sumTotal();
  }

}
