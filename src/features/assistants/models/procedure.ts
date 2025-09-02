import { User } from '../../../core/models/user';
import { Kit } from '@/features/kits/models/kit';
import { Tool } from '@/features/tools/models/tool';

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
