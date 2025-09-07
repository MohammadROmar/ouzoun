'use server';

import { cookies } from 'next/headers';

type DeleteAssistantActionState = { message: string | undefined; id: string };

export async function deleteAssistantAction(
  prevState: DeleteAssistantActionState,
): Promise<DeleteAssistantActionState> {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(
      `${process.env.BASE_URL}/api/users/DeleteUserById`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ userId: prevState.id }),
      },
    );

    if (!response.ok) {
      return { message: 'failed-to-delete', id: prevState.id };
    }
  } catch (e) {
    console.log(e);

    return { message: 'server-connection', id: prevState.id };
  }

  return { message: 'success', id: prevState.id };
}
