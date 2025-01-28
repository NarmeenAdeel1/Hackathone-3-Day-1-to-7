import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category"; // 👈 Import category

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category], // 👈 category ko yahan add karein
};
