import { Clinic } from './clinic';

export interface Doctor {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string | null;
  role: string;
  clinic: Clinic | null;
  rate: number;
}
