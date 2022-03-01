import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsSchema } from './schemas/item.schema';
import { ItemsController } from '../items/items.controller';
import { ItemsService } from '../items/items.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemsSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
