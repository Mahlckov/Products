import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/list-products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateProductComponent } from './product/update-product/update-product.component';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import { SearchByCategoryComponent } from './category/search-by-category/search-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    SearchByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
