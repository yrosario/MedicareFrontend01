import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, USER } from '../contants';
import { RoleEntity } from '../entity/role/role-entity';
import { UserEntity } from '../entity/user/user-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:UserEntity  = new UserEntity;
  users = [{id:1, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:2, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:3, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:4, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"},
           {id:5, firstname:"Mike", lastname:"Jordan", email:"mjordan@gamil.com", username:"mjordan", password:"jordan",role:"user"}];

  constructor(private http:HttpClient) {
    this.user.uid = 1;
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
    user.uid = 1;
  }

  /*Get all users from server*/
  getUsers(){
    return this.http.get<UserEntity[]>(`${API_URL}/${USER}`);
  }
  
  /*Delete user by id*/
  deleteUserById(id:number){
    return this.http.delete(`${API_URL}/${USER}/${id}`, {observe: "response", responseType:"text"});
  }

  editUser(user:UserEntity){
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id === user.uid){
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

  findUserById(id:number){
    for(let user of this.users){
      if(user.id === id){
        return user;
      }
    }

    return null;
  }

  save(user){
    
    for(let i = 0; i < this.users.length; i++){
      if(user.id === this.users[i].id)
      {
        this.users[i] = user;
        return;
      }
    }
  }

  isUserLoggedIn(){
   
    let isLogin = +sessionStorage.getItem("loggedIn");
 
    if(isLogin === 1){
     return true;
    }else{
     return false;
    }
   }
}
