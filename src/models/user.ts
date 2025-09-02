import { Clinic } from './clinic';

export interface User {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string | null;
  role: string;
  clinic: Clinic | null;
  rate: number;
  profileImagePath: string | null;
}
