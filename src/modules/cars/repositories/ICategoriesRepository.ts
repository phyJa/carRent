import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./implementations/CategoriesRepository";

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository };
