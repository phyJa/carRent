import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository implements ICategoriesRepository {
  // Properties
  private repository: Repository<Category>;

  // Methods
  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // SELECT * FROM categories WHERE name = "name" limit 1
    // findONE => limit 1
    const foundCategory = await this.repository.findOne({ name });
    return foundCategory;
  }
}
export { CategoriesRepository, ICreateCategoryDTO };
