import { Tool } from './tool';
import { Implant } from './implant';

export interface Kit {
  id: number;
  name: string;
  isMainKit: boolean;
  toolCount: number;
  implantCount: number;
  tools: Tool[];
  implants: Implant[];
}

export type KitInputs = {
  name: string;
  main: string | null;
  image: File;
};
