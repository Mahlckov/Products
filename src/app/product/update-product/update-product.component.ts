import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import { Router, ActivatedRoute } from '@angular/router';
import {ProductService} from "../../services/product.service";
import {Category} from "../../models/category.model";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
  currentProduct = new Product();
  categories: Category[] = [];
  updatedCatId?: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.productService.listCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.productService.getProduct(this.activatedRoute.snapshot.params['id'])
      .subscribe(prod => {
        this.currentProduct = prod;
        this.updatedCatId = this.currentProduct.category.idCat;
      });
  }

  onDateChange(event: string) {
    this.currentProduct.creationDate = new Date(event);
  }

  updateProduct() {
    this.currentProduct.category = this.categories
      .find(cat => cat.idCat === this.updatedCatId)!;
    this.productService.updateProduct(this.currentProduct).subscribe(prod => {
      this.router.navigate(['products']);
    });
  }
}
