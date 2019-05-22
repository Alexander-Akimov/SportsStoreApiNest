import { Controller } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }


}
