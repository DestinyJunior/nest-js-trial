import * as mongoose from 'mongoose';

export const ItemsSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'item name is required'] },
  qty: { type: Number, required: [true, 'item qty is required'] },
  description: String,
});
