import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./product/list-products/products.component";
import {AddProductComponent} from "./product/add-product/add-product.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {path: "add-product", component : AddProductComponent},
  { path: 'updateProduct/:id', component: UpdateProductComponent },
  { path: "", redirectTo: "products", pathMatch: "full" }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
