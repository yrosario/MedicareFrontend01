import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "test";
  password = "password"
  invalidLogin = false;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    let isLogin = this.userService.isUserLoggedIn();
    if(isLogin){
      this.redirectLoggedInUser();
    }
  }

  login(){
    if(this.userService.authenticate(this.username,this.password)){
      sessionStorage.setItem("loggedIn", "1");
      this.invalidLogin = false;
      this.router.navigate(["/shop"]);
    }else{
      this.invalidLogin = true;
    }
  }

  routeToRegister(){
    this.router.navigate(['register']);
  }

  redirectLoggedInUser(){
    this.router.navigate(["/shop"]);
  }
  
}
