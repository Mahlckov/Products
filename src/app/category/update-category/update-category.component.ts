import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../core/models/category.model";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.scss'
})
export class UpdateCategoryComponent implements OnInit{
  @Input()
  category! : Category;

  @Input()
  isAdded!:boolean;

  @Output() //renvoyer à la liste des categories une catégorie créée ou maj
  categoryUpdated = new EventEmitter<Category>();

  ngOnInit(): void {
    console.log(this.category);
  }

  saveCategory() {
    this.categoryUpdated.emit(this.category);
  }
}
