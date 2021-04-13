import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";
import { PostgresRepository } from "../repositories/PostgresRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const repository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  // Get the request
  const { name, description } = request.body;
  // Call the service
  new CreateCategoryService(repository).execute({
    name,
    description,
  });
  // Return the response
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  return response.json(repository.list());
});

export { categoriesRoutes };
