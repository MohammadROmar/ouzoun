'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { getKitInputErrors } from '../utils/actions-errors';
import type { KitActionState } from '../models/kit-action-state';

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
        message:
          response.status === 401 || response.status === 403
            ? 'unauthorized'
            : `failed-to-${prevState.action === 'CREATE' ? 'create' : 'edit'}`,
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
