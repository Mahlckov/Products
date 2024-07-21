import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {ProductModule} from "./product/product.module";
import {CategoryModule} from "./category/category.module";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    CategoryModule,
    LoginModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
