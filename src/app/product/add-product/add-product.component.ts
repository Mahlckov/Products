import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Category} from "../../models/category.model";

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
              private router :Router) { }


  ngOnInit() {
    this.productService.listCategories().
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
