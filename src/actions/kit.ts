'use server';

import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import { isInvalidText, isInvalidImage } from './validation';
import type { KitInputs } from '@/models/kit';

type KitActionState = {
  message: string | undefined;
  action: 'CREATE' | 'EDIT';
  errors?: { [K in keyof KitInputs]?: boolean };
  defaultValues?: KitInputs;
};

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

  const locale = await getLocale();
  redirect(`/${locale}/kits`);
}

function getKitInputErrors(data: KitInputs) {
  const errors: { [K in keyof KitInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.image = isInvalidImage(data.image);

  return errors;
}
