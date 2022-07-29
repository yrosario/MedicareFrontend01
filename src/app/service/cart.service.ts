import { HttpClient, HttpHeaders } from '@angular/common/http';
import { R3SelectorScopeMode } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL, CART, CART_ITEM, USER } from '../contants';
import { CartEntity } from '../entity/cart/cart-entity';
import { CategoryEntity } from '../entity/category/category-entity';
import { ProductEntity } from '../entity/product/product-entity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any[]  = [];
  total = 0;

  
  constructor(private http:HttpClient) { 
  }

  // Get cart from server
  getCart(id:number){
    return this.http.get<CartEntity[]>(`${API_URL}/${CART}/${USER}/${id}`)
    .pipe(
      map(
        res=>{
          this.cart = res;
          return res;
        }
      )
    );
  }


  //Post item to cart on server
  addToCart(id:number, pid:number){
    let bodyParam = {productId:pid};
    return this.http.post(`${API_URL}/${CART}/${USER}/${id}`,bodyParam);
  }

  //Update cart item on server
  updateToCart(uid:number,cartItem:CartEntity){
    return this.http.put(`${API_URL}/${CART}/${USER}/${uid}`,cartItem);
  }

  //Remove item from cart on the server
  removeFromCart(uid:number, iid:number){
    return this.http.delete(`${API_URL}/${CART}/${USER}/${uid}/${CART_ITEM}/${iid}`);
  }


  

  setCart(cart){
    this.cart = cart;
  }

  getLocalCart():CartEntity[]{
    return this.cart;
  }
}
