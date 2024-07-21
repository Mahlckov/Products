import {Component, OnInit} from '@angular/core';
import {Product} from "../../core/models/product.model";
import {ProductService} from "../../core/services/product.service";
import {Router} from "@angular/router";
import {Category} from "../../core/models/category.model";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit{
  newProduct = new Product();
  categories! : Category[];
  newIdCat! : number;
  newCategory! : Category;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router :Router) { }


  ngOnInit() {
    this.categoryService.listCategories().
    subscribe(cats => {console.log(cats);
        this.categories = cats;
      }
    );
  }

  addProduct(){
    this.newProduct.category = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.productService.addProduct(this.newProduct)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['products']);
      });
  }
}
