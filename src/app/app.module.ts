import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/list-products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateProductComponent } from './product/update-product/update-product.component';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import { SearchByCategoryComponent } from './product/search-by-category/search-by-category.component';
import { SearchByNameComponent } from './product/search-by-name/search-by-name.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import {ListCategoriesComponent} from "./category/list-categories/list-categories.component";
import { LoginComponent } from './login/login/login.component';
import {ProductModule} from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    SearchByCategoryComponent,
    SearchByNameComponent,
    ListCategoriesComponent,
    UpdateCategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
