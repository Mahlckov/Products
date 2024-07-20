import { Component } from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.scss'
})
export class SearchByNameComponent {
  productName: string = '';
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  searchProducts() {
    if (this.productName.trim()) {
      this.productService.searchByName(this.productName)
        .subscribe(prods => {
          this.products = prods;
        });
    } else {
      this.products = [];
    }
  }

  onKeyUp(value: string) {
    this.productName = value;
    this.searchProducts();
  }
}
