import { CategoryRepository } from "../repositories/CategoryRepository";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categoriesRepository: ICategoryRepository;

  // You could do this too:
  // constructor(private categoriesRepository: CategoriesRepository){}
  // and remove the private declaration line
  constructor(categoriesRepository: ICategoryRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: IRequest): void {
    const verifyIfThereIsACategoryWithThePassedName = this.categoriesRepository.findByName(
      name
    );
    if (verifyIfThereIsACategoryWithThePassedName) {
      throw new Error("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
