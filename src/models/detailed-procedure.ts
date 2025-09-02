import { User } from './user';
import { Kit } from './kit';
import { Tool } from './tool';
import { Implant } from './implant';

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
