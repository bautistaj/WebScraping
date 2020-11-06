import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PageModule } from './page/page.module';
import { Configuration } from './config/Configuration';
import { ConfigModule } from '@nestjs/config/dist/config.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
    Configuration.getUrl()
  ), 
  
  ProductModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
