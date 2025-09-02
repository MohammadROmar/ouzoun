import { ToolInputs } from './tool-inputs';

export type ToolActionState = {
  id?: string;
  action: 'CREATE' | 'EDIT';
  defaultValues?: ToolInputs;
  message: string | undefined;
  errors?: { [K in keyof ToolInputs]?: boolean };
};

export type DeleteToolActionState = { message: string | undefined; id: string };
