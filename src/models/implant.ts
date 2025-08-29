export interface Implant {
  id: number;
  kitId: number;
  radius: number;
  width: number;
  height: number;
  quantity: number;
  brand: string;
  description: string;
  imagePath: string | null;
}

export type ImplantInputs = {
  image: File;
  kitId: string;
  description: string;
  width: string;
  height: string;
  radius: string;
  brand: string;
  quantity: string;
};
