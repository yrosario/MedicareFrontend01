import { Injectable } from '@angular/core';
import { RoleEntity } from '../entity/role/role-entity';
import { UserEntity } from '../entity/user/user-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:UserEntity  = new UserEntity;
  users = [{id:1, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:1, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:1, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:1, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:1, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"}];

  constructor() {
    this.user.id = 1;
    this.user.firstname = "Mike";
    this.user.lastname = "Jordan";
    this.user.email = "mjordan@suffolk.edu";
    this.user.username = "test";
    this.user.password = "test";

    let role =  new RoleEntity();
    role.id = 1;
    role.name = "admin";

    this.user.role = new RoleEntity();
   }


   authenticate(username, password){

      if(this.user.username === username && this.user.password === password)
      {
        return true;
      }else{
        return false;
      }
  }

  registerUser(user:UserEntity){
    this.user = user;
    user.id = 1;
  }

  getUsers(){
    return this.users;
  }

  editUser(user:UserEntity){
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id === user.id){
        this.user[i] = user;
        return;
      }
    }
  }

  removeUser(id:number){
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id === id){
        this.users.splice(i,1);
        return;
      }
    }
  }
}
