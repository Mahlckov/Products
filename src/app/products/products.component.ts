import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  produits : string[];

  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }
}
