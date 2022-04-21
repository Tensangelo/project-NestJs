import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit => ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return 'Esto es un filtro filtro';
  }

  // Forma nest
  @Get(':productsId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productsId', ParseIntPipe) productsId: number) {
    // return {
    //   id: productsId,
    //   name: `producto numero ${productsId}`,
    // };
    return this.productsService.findOne(+productsId);
  }

  // Forma de express
  // @Get(':productsId')
  // @HttpCode(HttpStatus.ACCEPTED)
  // getProduct(
  //   @Res() response: Response,
  //   @Param('productsId') productsId: string,
  // ) {
  //   response.status(200).send({
  //     id: productsId,
  //     name: `producto numero ${productsId}`,
  //   });
  // }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Mensaje creado',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
