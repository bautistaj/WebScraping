import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryOptions } from 'src/util/QueryOptions';
import { Page } from '../schema/page';

@Injectable()
export class PageService {
  constructor(@InjectModel('Page') private readonly pageModel: Model<Page>){}

  async getPages(queryParams: QueryOptions) {
    const offset = queryParams.offset ? Number(queryParams.offset): 0;
    const limit = queryParams.limit ? Number(queryParams.limit): 5;

    const products = await this.pageModel.find()
    .skip(offset)
    .limit(limit)
    .exec();
    return products.map(page => ({
      id: page.id,
      url: page.url,
      provider: page.provider,
      identifiers: page.identifiers
    }));
  }
}
