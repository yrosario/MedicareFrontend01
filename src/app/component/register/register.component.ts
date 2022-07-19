import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/entity/user/user-entity';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:UserEntity = new UserEntity();

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm){
    const value = form.value;

    console.log(`form f${form}`);
    this.user.firstname = value.username;
    this.user.lastname = value.lastname;
    this.user.email = value.email;
    this.user.password = value.password;

    this.userService.registerUser(this.user);

    console.log(this.user);
    this.router.navigate(["login"]);
  }



}
