import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, UPLOAD, PRODUCT, USER, IMAGE } from '../contants';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  

  constructor(private http:HttpClient) { }


  saveImage(id:number, image: File){
    let formData: FormData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<void>(`${API_URL}/${PRODUCT}/${id}/${UPLOAD}`,formData);
  }


  getImage(id:number):Observable<Blob>{
    return this.http.get(`${API_URL}/${PRODUCT}/${id}/${IMAGE}`, {responseType: 'blob'});
  }
}
