import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Product } from '../schema/product';
import { ProductService } from '../service/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  @Post()
  async addProduct(@Body() product: Product ) {
    const generatedId = await this.productService.create(product);
    return { id: generatedId };
  }
  
  @Get()
  async getAllProducts(@Req() request) {
    const products = await this.productService.getProducts(request.query);
    return products;
  }
}
