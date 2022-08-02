import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/entity/user/user-entity';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }

  isloggedIn(){
    return this.userService.isUserLoggedIn();
  }

  isUserLoggedIn(){
    let user:UserEntity = JSON.parse(sessionStorage.getItem("user"));
    
    return user === null ? false : true;
      
  }

}
