export interface Tool {
  id: number;
  kitId: string;
  categoryId: number;
  name: string;
  width: number;
  height: number;
  thickness: number;
  quantity: number;
}

export type ToolInputs = {
  name: string;
  image: File;
  'kit-id': string;
  'category-id': number;
  width: string;
  height: string;
  thickness: string;
  quantity: string;
};
