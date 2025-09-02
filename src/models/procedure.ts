import { User } from './user';
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
  doctor: User;
  tools: Tool[];
  kits: Kit[];
  assistants: User[];
}
