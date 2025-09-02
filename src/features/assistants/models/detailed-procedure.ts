import { User } from '../../../core/models/user';
import { Kit } from '@/features/kits/models/kit';
import { Tool } from '@/features/tools/models/tool';
import { Implant } from '@/features/implants/models/implant';

export interface DetailedProcedure {
  id: number;
  doctorId: string;
  categoryId: number;
  numberOfAsisstants: number;
  status: number;
  date: string;
  doctor: User;
  surgicalKits: Kit[];
  requiredTools: Tool[];
  implantKits: {
    implant: Implant;
    toolsWithImplant: Tool[];
  }[];
  assistants: User[];
}
