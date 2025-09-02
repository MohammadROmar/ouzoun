import type { ImplantInputs } from './implant-inputs';

export type ImplantActionState = {
  message: string | undefined;
  errors?: { [K in keyof ImplantInputs]?: boolean };
  defaultValues?: ImplantInputs;
  id?: string;
  action: 'CREATE' | 'EDIT';
};

export type DeleteImplantActionState = {
  message: string | undefined;
  id: string;
};
