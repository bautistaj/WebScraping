import * as mongoose from 'mongoose';

export const IdentifierSchema = new mongoose.Schema({
  main: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  title: { type: String, required: true }
});

export interface Identifier extends mongoose.Document {
  id: string;
  main: string;
  image: string;
  price: string;
  title: string;
}