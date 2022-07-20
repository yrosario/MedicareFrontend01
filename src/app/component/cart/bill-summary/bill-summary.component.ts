import { Component, Input, OnInit } from '@angular/core';
import { CartEntity } from 'src/app/entity/cart/cart-entity';

@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent implements OnInit {

  @Input()
  cart:CartEntity;
  total = 0;

  constructor() { }

  ngOnInit(): void {
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
