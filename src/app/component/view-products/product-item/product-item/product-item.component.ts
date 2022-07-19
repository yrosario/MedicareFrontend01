import { Component, Input, OnInit } from '@angular/core';
import { ProductEntity } from 'src/app/entity/product/product-entity';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:ProductEntity;

  constructor() { }

  ngOnInit(): void {
  }

}
