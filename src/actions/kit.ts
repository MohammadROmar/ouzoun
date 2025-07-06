'use server';

import { revalidatePath } from 'next/cache';

import { isInvalidText, isInvalidImage } from './validation';
import type { KitInputs } from '@/models/kit';

type KitActionState = {
  message: string | undefined;
  action: 'CREATE' | 'EDIT';
  errors?: { [K in keyof KitInputs]?: boolean };
  defaultValues?: KitInputs;
};

type DeleteKitActionState = { message: string | undefined; id: string };

export async function kitAction(
  prevState: KitActionState,
  formData: FormData,
): Promise<KitActionState> {
  const name = formData.get('name') as string;
  const image = formData.get('image') as File;

  const errors = getKitInputErrors({ name, image });

  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return {
      message: 'invalid-input',
      errors,
      defaultValues: { name, image },
      action: prevState.action,
    };
  }

  if (prevState.action === 'CREATE') {
  } else {
  }

  revalidatePath('/en/kits', 'layout');
  revalidatePath('/ar/kits', 'layout');

  return {
    message: 'success',
    action: prevState.action,
    defaultValues: { name, image },
  };
}

export async function deleteKitAction(
  prevState: DeleteKitActionState,
): Promise<DeleteKitActionState> {
  revalidatePath('/en/kits', 'layout');
  revalidatePath('/ar/kits', 'layout');

  return { message: 'success', id: prevState.id };
}

function getKitInputErrors(data: KitInputs) {
  const errors: { [K in keyof KitInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.image = isInvalidImage(data.image);

  return errors;
}
