import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    // Get the request
    const { name, description } = request.body;
    // Call the service
    await this.createCategoryUseCase.execute({
      name,
      description,
    });
    // Return the response
    return response.status(201).send();
  }
}

export { CreateCategoryController };
