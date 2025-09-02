import { Implant } from '@/features/implants/models/implant';
import { Tool } from '@/features/tools/models/tool';

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
