'use server';

import { revalidatePath } from 'next/cache';

import { isInvalidText, isInvalidNumber, isInvalidImage } from './validation';
import type { ImplantInputs } from '@/models/implant';

export type ImplantActionState = {
  message: string | undefined;
  errors?: { [K in keyof ImplantInputs]?: boolean };
  defaultValues?: ImplantInputs;
  action: 'CREATE' | 'EDIT';
};

type DeleteImplantActionState = { message: string | undefined; id: string };

async function implantAction(
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

  revalidatePath('/en/implants', 'layout');
  revalidatePath('/ar/implants', 'layout');

  return { message: 'success', action: prevState.action, defaultValues: data };
}

async function deleteImplantAction(
  prevState: DeleteImplantActionState,
): Promise<DeleteImplantActionState> {
  revalidatePath('/en/implants', 'layout');
  revalidatePath('/ar/implants', 'layout');

  return { message: 'success', id: prevState.id };
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

export { implantAction, deleteImplantAction };
