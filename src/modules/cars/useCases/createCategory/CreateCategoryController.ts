import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    // Get the request
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    // Call the service
    await createCategoryUseCase.execute({
      name,
      description,
    });
    // Return the response
    return response.status(201).send();
  }
}

export { CreateCategoryController };
