import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  // Properties
  private categories: Category[];
  // Methods
  constructor() {
    this.categories = [];
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
export { CategoryRepository };
