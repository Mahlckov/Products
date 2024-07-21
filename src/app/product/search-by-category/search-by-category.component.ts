import {Component, OnInit} from '@angular/core';
import {Category} from "../../core/models/category.model";
import {Product} from "../../core/models/product.model";
import {ProductService} from "../../core/services/product.service";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrl: './search-by-category.component.scss'
})
export class SearchByCategoryComponent implements OnInit{
  products : Product[] = [];
  categoryId! : number;
  categories : Category[]=[];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categoryService.listCategories().
    subscribe(cats => {
      this.categories = cats;
    });
  }

  onChange() {
    console.log('Category ID:', this.categoryId);
    this.productService.searchByCategory(this.categoryId).
    subscribe(prods =>{
      this.products=prods
      console.log(prods);
    });
  }
}
