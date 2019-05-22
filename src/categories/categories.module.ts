import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { DatabaseModule } from 'src/db/database.module';
import { CategoriesService } from 'src/services/categories.service';
import { categoriesProviders } from 'src/db/categories.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    ...categoriesProviders,
  ],
})
export class CategoriesModule { }
