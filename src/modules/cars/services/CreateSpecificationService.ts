import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}

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
