import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interface/items.interface';
import { CreateItemDTo } from './dto/create.item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemService.findAll();
  }

  @Post()
  saveItem(@Body() createItemDto: CreateItemDTo): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Get(':id')
  async getSingleItem(@Param() param): Promise<Item> {
    return await this.itemService.findOne(param.id);
  }

  @Put(':id')
  updateItem(
    @Param() param,
    @Body() createItemDto: CreateItemDTo,
  ): Promise<Item> {
    return this.itemService.updateItem(param.id, createItemDto);
  }

  @Delete(':id')
  async deleteSingleItem(@Param() param): Promise<Item> {
    return this.itemService.deleteItem(param.id);
  }
}
