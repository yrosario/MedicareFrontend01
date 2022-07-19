import { Injectable } from '@angular/core';
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

  constructor() { }

  getCategories(){
    return this.catogries;
  }
}
