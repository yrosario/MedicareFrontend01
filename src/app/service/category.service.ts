import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, CATEGORY } from '../contants';
import { CategoryEntity } from '../entity/category/category-entity';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  catogries = [new CategoryEntity(1,"Vitamin"),
              new CategoryEntity(2,"Pain Relief"),
              new CategoryEntity(3,"Cold/Flu"),
              new CategoryEntity(4,"Nasal Congestion Relief"),
              new CategoryEntity(5,"Antibiotics")]

  constructor(private httpClient:HttpClient) { }

  getCategories(){
    return this.httpClient.get<CategoryEntity[]>(API_URL+CATEGORY);
  }

  // getCategories(){
  //   return this.catogries;
  // }
}
