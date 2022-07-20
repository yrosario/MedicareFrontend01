import { CategoryEntity } from "../category/category-entity";

export class ProductEntity {
    id:number;
    name:string;
    category:CategoryEntity;
    price:number;
    qty:number;
    imgUrl:string;

    constructor(id:number, name:string, category:CategoryEntity, price:number, qty:number,imgUrl){

        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.qty = qty;
        this.imgUrl=imgUrl;

    }
}
