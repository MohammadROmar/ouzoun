import { Tool } from './tool';
import { Implant } from './implant';

export interface Kit {
  id: number;
  name: string;
  isMainKit: boolean | 'on' | null;
  toolCount: number;
  implantCount: number;
  tools: Tool[];
  implants: Implant[];
  imagePath: string | null;
}

export type KitInputs = {
  name: string;
  isMainKit: 'on' | null;
  image: File;
};
