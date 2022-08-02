import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartEntity } from 'src/app/entity/cart/cart-entity';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { UserEntity } from 'src/app/entity/user/user-entity';
import { CartService } from 'src/app/service/cart.service';
import { MessengerService } from 'src/app/service/shared/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any[] = [];
  total = 0;
  userId = null;

  constructor(private cartService:CartService, private msg:MessengerService,
        private router:Router) { }

  ngOnInit(): void {
    let user:UserEntity = JSON.parse(sessionStorage.getItem("user"));
    if(user === null){
      this.redirectToLogin();
    }

    
    this.getCart(user.uid);
    this.userId = user.uid;


    this.msg.getMsg().subscribe((product:ProductEntity) => {
      
      let cartItem = this.isInCart(product.pid);
      
      if(!cartItem){
        this.addToCart(this.userId,product.pid);
      }

      });

      
  
    this.sumTotal();
    this.cartService.setCart(this.cart);

  }

  addProductToCart(product:ProductEntity){
    this.cartService.setCart(product);
  }

  sumTotal(){
    this.total = 0;
    for(let item of this.cart){
      console.log("Value " + item.quantity);
      this.total += item.quantity + item.product.price;
    }
  }

  //Reduce quantity or remove from cart
  removeItem(cartItem){
    if(cartItem.quantity > 1){
      cartItem.quantity--;
    }else{
      this.removeFromCart(this.userId,cartItem.id);
    }


    //update server
    this.updateToCart(this.userId, cartItem);
  }

  //Increases cart item quantity
  addItem(cartItem){
    cartItem.quantity++;

    //update cart item on server
    this.updateToCart(this.userId, cartItem);

    this.sumTotal();
  }

  billCheckout(){
    this.router.navigate(["/cart/bill-summary"]);
  }

  //Get user carts from server
  getCart(id:number){
    console.log("GET CART");
    this.cartService.getCart(id).subscribe(
      res => {
        this.cart = res;
        this.sumTotal();
        this.cartService.setCart(res);
      }
    );
  }

  //Add to cart on server
  addToCart(uid:number,pid:number){
    this.cartService.addToCart(uid,pid).subscribe(
      res =>{
        this.sumTotal();
      }
    )
  }

  //update item cart to the server
  updateToCart(uid:number, cartItem:CartEntity){
    this.cartService.updateToCart(uid,cartItem).subscribe(
      res =>{
        this.sumTotal();
        this.getCart(uid);
      }
    )
  }

  //Delete item on the cart on the server
  removeFromCart(uid:number, iid:number){
    this.cartService.removeFromCart(uid,iid).subscribe(
      res=>{
        this.sumTotal();
      }
    );
  }

  //Check if product is in the cart
  isInCart(pid:number){
    for(let item of this.cart){
      if(item.product.pid == pid){
        return item;
      }
    }
    return false;

  }

  //If user has not logged in redirect to login page
  redirectToLogin(){
    this.router.navigate(["/login"]);
  }

}
