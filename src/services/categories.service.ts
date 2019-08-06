import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Category } from '../interfaces/category.interface';
import { CreateCategoryDto } from '../dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(@Inject('CATEGORY_MODEL') private readonly catModel: Model<Category>) { }

  async create(createCatDto: CreateCategoryDto): Promise<Category> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Category[]> {
    return await this.catModel.find().exec();
  }
}