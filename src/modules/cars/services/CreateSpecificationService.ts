import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const verifyIfASpecificationAlreadyExists = this.specificationRepository.findByName(
      name
    );

    if (verifyIfASpecificationAlreadyExists) {
      throw new Error("Specification already exists!");
    } else {
      this.specificationRepository.create({ name, description });
    }
  }
}

export { CreateSpecificationService };
