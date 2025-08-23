import { Doctor } from './doctor';
import { Kit } from './kit';
import { Tool } from './tool';

export interface Procedure {
  id: number;
  doctorId: string;
  numberOfAsisstants: number;
  assistantIds: string[] | null;
  categoryId: number;
  status: number;
  date: string;
  doctor: Doctor;
  tools: Tool[];
  kits: Kit[];
  assistants: Doctor[];
}
