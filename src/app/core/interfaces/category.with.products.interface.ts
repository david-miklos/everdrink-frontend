import { Product } from './product.interface';

export interface CategoryWithProducts {
  id: string;
  name: string;
  display_name: string;
  description: string;
  order: number;
  products: Product[];
}
