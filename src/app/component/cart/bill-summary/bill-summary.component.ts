import { Component, OnInit } from '@angular/core';
import { CartEntity } from 'src/app/entity/cart/cart-entity';
import { UserEntity } from 'src/app/entity/user/user-entity';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent implements OnInit {

  cart:CartEntity[] = [];
  total = 0;
  userId = null;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  
    let user:UserEntity = JSON.parse(sessionStorage.getItem("user"));
    if(user.uid){
       this.cartService.getCart(user.uid);
       this.userId = user.uid;
    }

    let newCart = new CartEntity();
    newCart.product = [];
    this.cartService.setCart(newCart);
    this.addTotal();
    
  
  }

  addTotal(){
    // this.total = 0;
    // let products = this.cart.products;

    // for(let item of products){
    //   this.total += item.qty + item.price;
    // }
  }

    //Get user carts from server
    getCart(id:number){
      this.cartService.getCart(id).subscribe(
        res => {
          this.cart = res;
        }
      );
    }

}
