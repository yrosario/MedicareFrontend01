import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/entity/user/user-entity';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  users = [];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  removeUser(id:number){
    this.userService.removeUser(id);
    this.users = this.userService.getUsers();
  }

  navigateEditUser(id:number){
    this.router.navigate(["/admin/manage-users/edit-user"]);
  }


}
