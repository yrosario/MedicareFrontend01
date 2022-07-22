import { Component, NgModuleFactory, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleEntity } from 'src/app/entity/role/role-entity';
import { UserEntity } from 'src/app/entity/user/user-entity';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user;
  roles:[{id:number,name:string}];
  role:{id:number,name:string} = {
    id: 0,
    name: 'user'
  };

  constructor(private userService:UserService, private roleService:RoleService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];

    this.user = this.userService.findUserById(id);
    this.roles = this.roleService.getRoles() as [{id:number,name:string}];
  }

  updateUser(form:NgForm){
    const value = form.value;

    this.user.firstname = value.firstname;
    this.user.lastname = value.lastname;
    this.user.email = value.email;
    this.user.role = value.role;


    this.userService.save(this.user);

  }

}
