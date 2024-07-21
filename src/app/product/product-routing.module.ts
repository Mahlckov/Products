import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchByNameComponent} from "./search-by-name/search-by-name.component";
import {SearchByCategoryComponent} from "./search-by-category/search-by-category.component";
import {ProductsComponent} from "./list-products/products.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'update/:id', component: UpdateProductComponent },
  { path: 'search-by-category', component: SearchByCategoryComponent },
  { path: 'search-by-name', component: SearchByNameComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
