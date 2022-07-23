import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { ProductService } from 'src/app/service/product.service';
import { MessengerService } from 'src/app/service/shared/messenger.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:ProductEntity;

  constructor(private activedRoute:ActivatedRoute, private productService:ProductService,private msg:MessengerService,
              private userService:UserService, private router:Router) { }

  ngOnInit(): void {
   let paramValue = this.activedRoute.snapshot.paramMap.get("id");

    if(paramValue !== null){
      this.product = this.findProduct(paramValue);
    }
  }

  private findProduct(paramValue){

    for(let product of this.productService.getProducts()){
      console.log(paramValue == product.id);
      if(product.id == paramValue){
        return product;
      }
    }

    return null;
  }

  addToCart(){

    let isLogin = this.userService.isUserLoggedIn();
    if(!isLogin){
      this.redirectLogin();
    }else{
      this.msg.sendMsg(this.product);
    }
  }

  goToCart(){
    let isLogin = this.userService.isUserLoggedIn();
    if(!isLogin){
      this.redirectLogin();
    }else{
      this.router.navigate(["/cart"]);
    }
  }

  redirectLogin(){
    this.router.navigate(["login"]);
  }


}
