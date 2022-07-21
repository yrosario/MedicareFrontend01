import { Component, OnInit } from '@angular/core';
import { CartEntity } from 'src/app/entity/cart/cart-entity';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent implements OnInit {

  cart:CartEntity;
  total = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  
    this.cart = this.cartService.getCart();

    let newCart = new CartEntity();
    newCart.products = [];
    this.cartService.setCart(newCart);
    this.addTotal();
    
  
  }

  addTotal(){
    this.total = 0;
    let products = this.cart.products;

    for(let item of products){
      this.total += item.qty + item.price;
    }
  }

}
