import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss'
})

export class ListCategoriesComponent implements OnInit {
  categories: Category[] = [];
  updatedCategory: Category = {idCat: 0, catName: ''};

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  updateCat(cat: Category) {
    this.updatedCategory = cat;
  }


  onCategoryUpdated(cat: Category) {
    console.log('Cat updated event', cat);
    this.categoryService.addCategory(cat).subscribe((cat) => this.loadCategories());
  }

  loadCategories() {
    this.categoryService.listCategories().subscribe(cats => {
      this.categories = cats;
      console.log(cats);
    });
  }
}
