import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/product.dto';

@Controller('api/products')
export class ProductsController {

    @Get()
    getAll() {
        return { message: 'This action returns all products!' };
    }

    @Post()
    addProduct(@Body() newProduct: CreateProductDto) {
        return newProduct;
    }

    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() updateProduct: CreateProductDto) {
        console.log(id);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {

    }
}
