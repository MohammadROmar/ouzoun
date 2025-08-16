export interface Implant {
  id: string;
  kitId: string;
  radius: number;
  width: number;
  height: number;
  quantity: number;
  brand: string;
  description: string;
}

export type ImplantInputs = {
  image: File;
  'kit-id': string;
  description: string;
  width: string;
  height: string;
  radius: string;
  brand: string;
  quantity: string;
};
