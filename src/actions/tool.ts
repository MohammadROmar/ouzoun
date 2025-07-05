'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getLocale } from 'next-intl/server';

import { isInvalidText, isInvalidNumber, isInvalidImage } from './validation';
import type { ToolInputs } from '@/models/tool';

export type ToolActionState = {
  message: string | undefined;
  errors?: { [K in keyof ToolInputs]?: boolean };
  defaultValues?: ToolInputs;
  action: 'CREATE' | 'EDIT';
};

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

  const locale = await getLocale();

  revalidatePath('/en/tools', 'layout');
  revalidatePath('/ar/tools', 'layout');
  redirect(`/${locale}/tools`);
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
