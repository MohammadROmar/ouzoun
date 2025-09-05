'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import {
  isInvalidNumber,
  isInvalidText,
} from '../../../shared/utils/validation';

type HolidayStatusInputs = { status: string; note: string };

export type ChangeHolidayStatusActionState = {
  id: string;
  message: string | undefined;
  defaultValues: HolidayStatusInputs;
  errors?: { [K in keyof HolidayStatusInputs]?: boolean };
};

export async function changeHolidayStatusAction(
  prevState: ChangeHolidayStatusActionState,
  formData: FormData,
): Promise<ChangeHolidayStatusActionState> {
  const status = formData.get('status') as string;
  const note = formData.get('note') as string;

  const errors: ChangeHolidayStatusActionState['errors'] = {};

  if (isInvalidNumber(status) || !['1', '2', '3'].includes(status)) {
    errors.status = true;
  }
  errors.note = isInvalidText(note);

  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return {
      message: 'invalid-input',
      id: prevState.id,
      defaultValues: { status, note },
      errors,
    };
  }

  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(
      `${process.env.BASE_URL}/api/holidays/ChangeStatus`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          holidayId: prevState.id,
          note,
          newStatus: +status,
        }),
      },
    );

    if (!response.ok) {
      return {
        id: prevState.id,
        message: 'failed-to-change',
        defaultValues: { status, note },
      };
    }
  } catch (e) {
    console.log(e);

    return {
      id: prevState.id,
      message: 'server-connection',
      defaultValues: { status, note },
      errors: {},
    };
  }

  revalidatePath('/en/assistants/holidays');
  revalidatePath('/ar/assistants/holidays');

  return {
    message: 'success',
    defaultValues: prevState.defaultValues,
    id: prevState.id,
  };
}
