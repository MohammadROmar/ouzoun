export interface Tool {
  id: string;
  kitId: string;
  categoryId: string;
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
  'category-id': string;
  width: string;
  height: string;
  thickness: string;
  quantity: string;
};
