import {Product} from "../models/product.model";
import {Category} from "../models/category.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export class ProductService {
  apiURL: string = 'http://localhost:8080/products/api';

  constructor(private http: HttpClient) {
  }

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  listCategories(): Category[] {
    return this.categories;
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Product>(url);
  }

  getCategory(id: number): Category {
    return this.categories.find(cat => cat.id == id)!;
  }

  addProduct(prod: Product):Observable<Product>{
    return this.http.post<Product>(this.apiURL, prod, httpOptions);
  }


  updateProduct(prod: Product) : Observable<Product>
  {
    return this.http.put<Product>(this.apiURL, prod, httpOptions);
  }


  deleteProduct(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  sortProducts() {
    this.products = this.products.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

}
