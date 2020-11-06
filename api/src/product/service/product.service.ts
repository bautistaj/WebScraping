import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryOptions } from 'src/util/QueryOptions';
import { Product } from '../schema/product';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

  async getProducts(queryOptions: QueryOptions) {
    const offset = queryOptions.offset ? Number(queryOptions.offset): 0;
    const limit = queryOptions.limit ? Number(queryOptions.limit): 5;

    const products = await this.productModel.find()
    .skip(offset)
    .limit(limit)
    .exec();
    return products.map(prod => ({
      id: prod.id,
      price: prod.price,
      image: prod.image,
      title: prod.title,
      provider: prod.provider,
    }));
  }

  async create(product: Product) {
    const newProduct = new this.productModel(product);
    const result = await newProduct.save();
    return result.id as string;
  }

}
