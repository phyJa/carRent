import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoriesRepository";

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository };
