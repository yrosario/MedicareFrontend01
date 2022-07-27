import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEntity } from 'src/app/entity/product/product-entity';
import { ImageService } from 'src/app/service/image.service';
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
  products:[ProductEntity];

  constructor(private activedRoute:ActivatedRoute, private productService:ProductService,private msg:MessengerService,
              private userService:UserService, private router:Router, private imageService:ImageService) { }

  ngOnInit(): void {
  
   this.getProducts();

   let paramValue = +this.activedRoute.snapshot.paramMap.get("id");


   console.log(paramValue);
    if(paramValue){
      this.getProductById(paramValue);
    }
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
        
      }
    )
  }

  getProductById(id:number){
    this.productService.getProductById(id).subscribe(
      res=>{
        this.product = res;
      }
    )
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

 
  getImage(id){
    return this.imageService.images[id];
  }


}
