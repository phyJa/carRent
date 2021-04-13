import { CategoryRepository } from "../repositories/CategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categoriesRepository: CategoryRepository;

  // You could do this too:
  // constructor(private categoriesRepository: CategoriesRepository){}
  // and remove the private declaration line
  constructor(categoriesRepository: CategoryRepository) {
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
