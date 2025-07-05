import { Tool } from './tool';
import { Implant } from './implant';

export interface Kit {
  id: string;
  name: string;
  tools: Tool[];
  implant?: Implant;
}

export type KitInputs = {
  name: string;
  image: File;
};
