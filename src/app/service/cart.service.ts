import { Injectable } from '@angular/core';
import { CartEntity } from '../entity/cart/cart-entity';
import { CategoryEntity } from '../entity/category/category-entity';
import { ProductEntity } from '../entity/product/product-entity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:CartEntity  = new CartEntity();
  total = 0;

  
  constructor() { 
    this.cart.id = 1;
    let category = new CategoryEntity(1,"Pain Relief");
    this.cart.products =[{id:1, productId:1,category:"Pain Relief",name:"Aspirin",price:8.44, qty:3},
    {id:2, productId:3,category:"Nasal Congestion",name:"Nasal Spray",price:8.44, qty:3},
    {id:3, productId:4,category:"Flu/Cold",name:"Tera Fly",price:7.44, qty:1},
    {id:4, productId:2,category:"Vitamin",name:"Vitamin C",price:9.44, qty:2},
    {id:5, productId:2,category:"Vitamin",name:"Vitamin B",price:10.44, qty:5}];
  }

  getCart(){
    return this.cart;
  }

  setCart(cart){
    this.cart = cart;
  }
}
