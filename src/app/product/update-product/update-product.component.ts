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
  categories! : Category[];
  updatedCatId? : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProduct(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentProduct = prod; } ) ;
  }

  updateProduct() {
    this.productService.updateProduct(this.currentProduct).subscribe(prod => {
      this.router.navigate(['products']); }
    );
  }
}
