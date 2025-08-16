import { Tool } from './tool';
import { Implant } from './implant';

export interface Kit {
  id: string;
  name: string;
  tools: Tool[];
  isMainKit: boolean;
  implant?: Implant;
}

export type KitInputs = {
  name: string;
  main: string | null;
  image: File;
};
