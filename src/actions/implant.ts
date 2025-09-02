'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getLocale } from 'next-intl/server';

import { isInvalidText, isInvalidNumber, isInvalidImage } from './validation';
import type { ImplantInputs } from '@/models/implant';

export type ImplantActionState = {
  message: string | undefined;
  errors?: { [K in keyof ImplantInputs]?: boolean };
  defaultValues?: ImplantInputs;
  id?: string;
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
      id: prevState.id,
      action: prevState.action,
    };
  }

  try {
    if (prevState.id) {
      formData.append('implantId', prevState.id);
    }

    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(
      `${process.env.BASE_URL}/api/implants${prevState.action === 'EDIT' ? `/${prevState.id}` : ''}`,
      {
        method: prevState.action === 'CREATE' ? 'POST' : 'PATCH',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      },
    );

    if (!response.ok) {
      return {
        message: `failed-to-${prevState.action === 'CREATE' ? 'create' : 'edit'}`,
        errors,
        defaultValues: data,
        id: prevState.id,
        action: prevState.action,
      };
    }
  } catch (error) {
    console.log(error);

    return {
      message: 'server-connection',
      errors,
      defaultValues: data,
      id: prevState.id,
      action: prevState.action,
    };
  }

  revalidatePath('/en/implants', 'layout');
  revalidatePath('/ar/implants', 'layout');

  return {
    message: 'success',
    id: prevState.id,
    action: prevState.action,
    defaultValues: data,
  };
}

async function deleteImplantAction(
  prevState: DeleteImplantActionState,
): Promise<DeleteImplantActionState> {
  const accessToken = (await cookies()).get('access-token')?.value;

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/implants/${prevState.id}`,
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

  revalidatePath('/en/implants');
  revalidatePath('/ar/implants');

  const locale = await getLocale();
  redirect(`/${locale}/implants`);
}

function getImplantInputErrors(data: ImplantInputs) {
  const errors: { [K in keyof ImplantInputs]?: boolean } = {};

  errors.brand = isInvalidText(data.brand);
  errors.kitId = isInvalidText(data.kitId);
  errors.description = isInvalidText(data.description);

  errors.width = isInvalidNumber(data.width);
  errors.height = isInvalidNumber(data.height);
  errors.radius = isInvalidNumber(data.radius);
  errors.quantity = isInvalidNumber(data.quantity);

  errors.image = isInvalidImage(data.image);

  return errors;
}

export { implantAction, deleteImplantAction };
