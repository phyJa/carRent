import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();

const repository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const verifyIfThereIsACategoryWithThePassedName = repository.findByName(name);
  if (verifyIfThereIsACategoryWithThePassedName)
    return response.status(400).json({ error: "Category already exists!" });
  repository.create({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  return response.json(repository.list());
});

export { categoriesRoutes };
