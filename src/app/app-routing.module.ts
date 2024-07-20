import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./product/list-products/products.component";
import {AddProductComponent} from "./product/add-product/add-product.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";
import {SearchByCategoryComponent} from "./product/search-by-category/search-by-category.component";
import {SearchByNameComponent} from "./product/search-by-name/search-by-name.component";
import {ListCategoriesComponent} from "./category/list-categories/list-categories.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {path: "add-product", component : AddProductComponent},
  { path: 'updateProduct/:id', component: UpdateProductComponent },
  { path: "", redirectTo: "products", pathMatch: "full" },
  {path: "search-by-category", component : SearchByCategoryComponent},
  {path: "search-by-name", component : SearchByNameComponent},
  {path: "categories", component : ListCategoriesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
