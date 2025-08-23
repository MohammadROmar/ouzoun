import { Doctor } from './doctor';
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
  doctor: Doctor;
  surgicalKits: Kit[];
  requiredTools: Tool[];
  implantKits: {
    implant: Implant;
    toolsWithImplant: Tool[];
  }[];
  assistants: Doctor[];
}
