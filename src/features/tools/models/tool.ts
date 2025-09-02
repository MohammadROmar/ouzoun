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
