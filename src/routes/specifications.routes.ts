import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  specificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
