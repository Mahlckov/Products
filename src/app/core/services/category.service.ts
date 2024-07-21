import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category.model";
import {api_URL} from "../../environments/config";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  listCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${api_URL}/categories`);
  }

  addCategory( cat: Category):Observable<Category>{
    return this.http.post<Category>(`${api_URL}/categories`, cat, httpOptions);
  }

  // getCategory(id: number): Category {
  //   return this.categories.find(cat => cat.id == id)!;
  // }

}
