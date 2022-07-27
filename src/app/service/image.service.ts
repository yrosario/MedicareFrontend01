import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, UPLOAD, PRODUCT, USER } from '../contants';
import { ProductEntity } from '../entity/product/product-entity';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images:{pid:string, content:any}[] = [];

  constructor(private http:HttpClient) { }


  saveImage(id:number, image: File){
    let formData: FormData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<void>(`${API_URL}/${PRODUCT}/${id}/${UPLOAD}`,formData);
  }


  createImageFromBlob(image: Blob, pid:string){
    let reader = new FileReader();
    reader.addEventListener("load", () =>{
      this.images.push({pid:pid, content:reader.result});
    }, false);

    if(image){
      reader.readAsDataURL(image);
    }
  }

  loadImages(product:ProductEntity[]){
    product.forEach(item => {
      this.createImageFromBlob(item.imageBlob, String(item.pid));
    });
  }
}
