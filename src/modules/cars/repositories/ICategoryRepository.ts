import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoryRepository";

interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoryRepository };
