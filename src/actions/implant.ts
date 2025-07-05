'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getLocale } from 'next-intl/server';

import { isInvalidText, isInvalidNumber, isInvalidImage } from './validation';
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

  const locale = await getLocale();

  revalidatePath('/en/implants', 'layout');
  revalidatePath('/ar/implants', 'layout');
  redirect(`/${locale}/implants`);
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

  errors.image = isInvalidImage(data.image);

  return errors;
}
