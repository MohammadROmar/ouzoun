'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getLocale } from 'next-intl/server';

import { isInvalidNumber } from './validation';

type ChangeProcedureStatusActionState = {
  message: undefined | string;
  status?: string;
};

export async function changeProcedureStatus(
  prevState: ChangeProcedureStatusActionState,
  formData: FormData,
): Promise<ChangeProcedureStatusActionState> {
  const status = formData.get('status') as string;

  if (isInvalidNumber(status) || !['2', '4'].includes(status)) {
    return { message: 'invalid-input', status: status };
  }

  revalidatePath('/en/assistants/assign');
  revalidatePath('/ar/assistants/assign');

  const locale = await getLocale();
  redirect(`/${locale}/assistants/assign`);
}
