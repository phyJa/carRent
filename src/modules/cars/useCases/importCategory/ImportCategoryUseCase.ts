import csvParse from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      // Call the node function to read a file by pieces (stream)
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      // Use the csvParse function to get a csvParser object
      const parseFile = csvParse();
      // Use the pipe function to send the piece read from stream to the parseFile
      stream.pipe(parseFile);
      // Do something while read the data
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    // Add the categories in the database
    categories.map(async (aCategory) => {
      const { name, description } = aCategory;
      const categoryAlreadyExists = this.categoriesRepository.findByName(name);
      if (!categoryAlreadyExists) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
