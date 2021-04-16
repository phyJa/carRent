import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoryRepository";
import { ICategoryRepository } from "./ICategoryRepository";

class PostgresRepository implements ICategoryRepository {
  private categories: Category[];

  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name + description);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    console.log(name);
    return this.categories[0];
  }
}

export { PostgresRepository };
