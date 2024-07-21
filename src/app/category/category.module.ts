import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import {ListCategoriesComponent} from "./list-categories/list-categories.component";
import {UpdateCategoryComponent} from "./update-category/update-category.component";


@NgModule({
  declarations: [
    ListCategoriesComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
