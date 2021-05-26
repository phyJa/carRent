import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository implements ICategoriesRepository {
  // Properties
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  // Methods
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    // Use Object.assign to avoid repetition
    // (category.name = name; category.description = description....)
    Object.assign(category, { name, description, date: new Date() });
    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const foundCategory = this.categories.find(
      (aCategory) => aCategory.name === name
    );
    return foundCategory;
  }
}
export { CategoriesRepository, ICreateCategoryDTO };
