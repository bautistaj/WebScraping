import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  price: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  provider: { type: String, required: true }
});

export interface Product extends mongoose.Document {
  id: string;
  price: string;
  image: string;
  title: string;
  provider: string;
}