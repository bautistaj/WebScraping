import * as mongoose from 'mongoose';
import { Identifier, IdentifierSchema } from './identifiers';

export const PageSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  url: { type: String, required: true },
  identifiers: { type: IdentifierSchema, required: true }
});

export interface Page extends mongoose.Document {
  id: string;
  provider: string;
  url: string;
  identifiers: Identifier;
}
