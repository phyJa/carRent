import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;

  // You could do this too:
  // constructor(private categoriesRepository: CategoriesRepository){}
  // and remove the private declaration line
  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute({ name, description }: IRequest): Promise<void> {
    const verifyIfThereIsACategoryWithThePassedName = await this.categoriesRepository.findByName(
      name
    );
    if (verifyIfThereIsACategoryWithThePassedName) {
      throw new Error("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
