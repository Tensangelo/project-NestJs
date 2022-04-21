import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productsId')
  getCategory(
    @Param('id') id: string,
    @Param('productsId') productsId: string,
  ) {
    return `category ${id} with product number ${productsId}`;
  }
}
