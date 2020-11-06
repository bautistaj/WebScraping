import { Controller, Req } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { PageService } from '../service/page.service';

@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) {}
  
  @Get()
  async getAllPages(@Req() request) {

    const pages = await this.pageService.getPages(request.query);
    return pages;
  }
}
