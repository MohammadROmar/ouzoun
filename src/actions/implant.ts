'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import type { ImplantInputs } from '@/models/implant';

export type ImplantActionState = {
  message: string | undefined;
  errors?: { [K in keyof ImplantInputs]?: boolean };
  defaultValues?: ImplantInputs;
  action: 'CREATE' | 'EDIT';
};

export async function implantAction(
  prevState: ImplantActionState,
  formData: FormData,
): Promise<ImplantActionState> {
  const data = Object.fromEntries(formData.entries()) as ImplantInputs;

  const errors = getImplantInputErrors(data);
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

  revalidatePath('/implants', 'layout');
  redirect('/implants');
}

function getImplantInputErrors(data: ImplantInputs) {
  const errors: { [K in keyof ImplantInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.brand = isInvalidText(data.brand);
  errors['kit-id'] = isInvalidText(data['kit-id']);
  errors.description = isInvalidText(data.description);

  errors.width = isInvalidNumber(data.width);
  errors.height = isInvalidNumber(data.height);
  errors.radius = isInvalidNumber(data.radius);
  errors.quantity = isInvalidNumber(data.quantity);

  errors.image =
    data.image === undefined ||
    data.image.size === 0 ||
    data.image.size > 2 * 1024 * 1024;

  return errors;
}

const isInvalidText = (input: string) => input.trim().length === 0;
const isInvalidNumber = (input: string) =>
  isNaN(parseInt(input)) || parseInt(input) < 0;
