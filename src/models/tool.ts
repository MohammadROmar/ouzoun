export interface Tool {
  id: number;
  kitId: number;
  categoryId: number;
  name: string;
  width: number;
  height: number;
  thickness: number;
  quantity: number;
  imagePath: string | null;
}

export type ToolInputs = {
  name: string;
  image: File;
  kitId: string;
  categoryId: number;
  width: string;
  height: string;
  thickness: string;
  quantity: string;
};
