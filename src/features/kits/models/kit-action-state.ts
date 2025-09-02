import { KitInputs } from './kit-inputs';

export type KitActionState = {
  message: string | undefined;
  action: 'CREATE' | 'EDIT';
  errors?: { [K in keyof KitInputs]?: boolean };
  defaultValues?: KitInputs;
};

export type DeleteKitActionState = { message: string | undefined; id: string };
