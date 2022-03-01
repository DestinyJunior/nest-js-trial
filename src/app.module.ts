import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import Config from './config/keys.config';

@Module({
  imports: [MongooseModule.forRoot(Config.mongoURI), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
