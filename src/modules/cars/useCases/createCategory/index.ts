import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

/**
 * The routes call the controller. Then the controller needs
 * an object of the UseCase. Further, the use case needs the
 * repository. So we first create our instance of the repository,
 * then use it in the use case and finally use the use case in
 * the controller
 * */
const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
