'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getLocale } from 'next-intl/server';

import type { DeleteImplantActionState } from '../models/implant-action-state';

export async function deleteImplantAction(
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
