import {Category} from "./category.model";

export class Product {
  idProduct!: number;
  productName!: string;
  productPrice!: number;
  creationDate!: Date ;
  category!: Category;
}
