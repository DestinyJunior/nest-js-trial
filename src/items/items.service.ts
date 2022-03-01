import { Injectable } from '@nestjs/common';
import { Item } from './interface/items.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.ItemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return this.ItemModel.findById(id);
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.ItemModel(item);
    return await newItem.save();
  }

  async updateItem(id: string, item: Item): Promise<Item> {
    const newItem = await this.ItemModel.findByIdAndUpdate(id, item, {
      runValidators: false,
      new: true,
    });

    return newItem;
  }

  async deleteItem(id: string): Promise<Item> {
    return await this.ItemModel.findByIdAndDelete(id);
  }
}
