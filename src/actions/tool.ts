'use server';

import { revalidatePath } from 'next/cache';

import { isInvalidText, isInvalidNumber, isInvalidImage } from './validation';
import type { ToolInputs } from '@/models/tool';

export type ToolActionState = {
  message: string | undefined;
  errors?: { [K in keyof ToolInputs]?: boolean };
  defaultValues?: ToolInputs;
  action: 'CREATE' | 'EDIT';
};

type DeleteToolActionState = { message: string | undefined; id: string };

export async function toolAction(
  prevState: ToolActionState,
  formData: FormData,
): Promise<ToolActionState> {
  const data = Object.fromEntries(formData.entries()) as ToolInputs;

  const errors = getToolInputErrors(data);
  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return {
      message: 'invalid-input',
      errors,
      defaultValues: data,
      action: prevState.action,
    };
  }

  if (prevState.action === 'CREATE') {
  } else {
  }

  revalidatePath('/en/tools', 'layout');
  revalidatePath('/ar/tools', 'layout');

  return { message: 'success', action: prevState.action, defaultValues: data };
}

export async function deleteToolAction(
  prevState: DeleteToolActionState,
): Promise<DeleteToolActionState> {
  revalidatePath('/en/tools', 'layout');
  revalidatePath('/ar/tools', 'layout');

  return { message: 'success', id: prevState.id };
}

function getToolInputErrors(data: ToolInputs) {
  const errors: { [K in keyof ToolInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors['category-id'] = isInvalidText(data['category-id']);

  errors.width = isInvalidNumber(data.width);
  errors.height = isInvalidNumber(data.height);
  errors.thickness = isInvalidNumber(data.thickness);
  errors.quantity = isInvalidNumber(data.quantity);

  errors.image = isInvalidImage(data.image);

  return errors;
}
