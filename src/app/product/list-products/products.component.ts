import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products?: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.listProducts().subscribe(prods => {
      console.log(prods);
      this.products = prods;
    });
  }


  deleteProduct(product: Product) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.productService.deleteProduct(product.idProduct!).subscribe(() => {
        console.log("product supprimé");
        this.loadProducts();
      });
    }
  }
}
