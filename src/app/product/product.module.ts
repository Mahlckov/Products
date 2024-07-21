import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {SearchByNameComponent} from "./search-by-name/search-by-name.component";
import {ProductsComponent} from "./list-products/products.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {SearchByCategoryComponent} from "./search-by-category/search-by-category.component";


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    SearchByCategoryComponent,
    SearchByNameComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
