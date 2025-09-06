import { cookies } from 'next/headers';

type Success<T> = { message: 'success'; data: T };
export type Error = {
  message: 'fetch-error' | 'server-connection';
  data: { status: number };
};

type Get<T> = Success<T> | Error;

export async function get<T>(
  path: string,
  options: RequestInit = {},
): Promise<Get<T>> {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(`${process.env.BASE_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      ...options,
    });

    if (!response.ok) {
      return { message: 'fetch-error', data: { status: response.status } };
    }

    const data = (await response.json()) as T;

    return { message: 'success', data };
  } catch (e) {
    const error = e as Error;

    if (error.message.includes('404')) {
      return { message: 'fetch-error', data: { status: 404 } };
    }

    return { message: 'server-connection', data: { status: 1000 } };
  }
}
