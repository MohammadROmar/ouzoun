'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
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

type DeleteKitActionState = { message: string | undefined; id: string };

export async function kitAction(
  prevState: KitActionState,
  formData: FormData,
): Promise<KitActionState> {
  const name = formData.get('name') as string;
  const image = formData.get('image') as File;
  const isMainKit = formData.get('isMainKit') as 'on' | null;

  const errors = getKitInputErrors({ name, image, isMainKit });

  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return {
      message: 'invalid-input',
      errors,
      defaultValues: { name, image, isMainKit },
      action: prevState.action,
    };
  }

  try {
    const requestFD = new FormData();

    requestFD.append('name', name);
    requestFD.append('isMainKit', isMainKit === 'on' ? 'true' : 'false');
    requestFD.append('image', image);

    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(`${process.env.BASE_URL}/api/kits`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      body: requestFD,
    });

    if (!response.ok) {
      return {
        message: `failed-to-${prevState.action === 'CREATE' ? 'create' : 'edit'}`,
        errors,
        defaultValues: { name, image, isMainKit },
        action: prevState.action,
      };
    }
  } catch (error) {
    console.log(error);

    return {
      message: 'server-connection',
      errors,
      defaultValues: { name, image, isMainKit },
      action: prevState.action,
    };
  }

  revalidatePath('/en/kits');
  revalidatePath('/ar/kits');

  return {
    message: 'success',
    action: prevState.action,
    defaultValues: { name, image, isMainKit },
  };
}

export async function deleteKitAction(
  prevState: DeleteKitActionState,
): Promise<DeleteKitActionState> {
  const accessToken = (await cookies()).get('access-token')?.value;

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/kits/${prevState.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      return { message: 'failed-to-delete', id: prevState.id };
    }
  } catch (e) {
    console.log(e);

    return { message: 'server-connection', id: prevState.id };
  }

  revalidatePath('/en/kits');
  revalidatePath('/ar/kits');

  const locale = await getLocale();
  redirect(`/${locale}/kits`);
}

function getKitInputErrors(data: KitInputs) {
  const errors: { [K in keyof KitInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.image = isInvalidImage(data.image);

  return errors;
}
