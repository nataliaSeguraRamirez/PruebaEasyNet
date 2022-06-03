import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { articles } from '../models/articles.interface';
import { Observable } from 'rxjs/internal/Observable';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
   direction = "https://shop-api3.herokuapp.com/api/products/"
  constructor(private http: HttpClient) { }

  public getArticles(){
    return this.http.get<articles>(this.direction).
      pipe(
        pluck(('products'))
      );
  }
  public getArticle(id: string){

    console.log(this.http.get(this.direction  + id).subscribe((data)=>console.log(data)))
    return this.http.get(this.direction + id).
      pipe(
        pluck(('product'))
      );
  }
}
