import {Product} from "../models/product.model";
import {Category} from "../models/category.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {api_URL} from "../environments/config";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(api_URL);
  }

  listCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${api_URL}/cat`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${api_URL}/${id}`);
  }

  // getCategory(id: number): Category {
  //   return this.categories.find(cat => cat.id == id)!;
  // }

  addProduct(prod: Product):Observable<Product>{
    return this.http.post<Product>(api_URL, prod, httpOptions);
  }


  updateProduct(prod: Product) : Observable<Product>
  {
    return this.http.put<Product>(api_URL, prod, httpOptions);
  }


  deleteProduct(id: number) {
    const url = `${api_URL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // sortProducts() {
  //   this.products = this.products.sort((n1, n2) => {
  //     if (n1.id! > n2.id!) {
  //       return 1;
  //     }
  //     if (n1.id! < n2.id!) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // }
  searchByCategory(idCat: number):Observable<Product[]> {
    const url = `${api_URL}/prodscat/${idCat}`;
    return this.http.get<Product[]>(url);
  }

}
