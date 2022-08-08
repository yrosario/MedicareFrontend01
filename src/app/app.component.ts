import { Component } from '@angular/core';
import { UserEntity } from './entity/user/user-entity';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedicareFrontend';

  constructor(private cartService:CartService){}

  
  ngOnInit():void{
    let user:UserEntity = JSON.parse(sessionStorage.getItem("user"));
    
    this.cartService.getCart(user.uid).subscribe();
  }
}
