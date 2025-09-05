import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export async function get(path: string, options: RequestInit = {}) {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(`${process.env.BASE_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      ...options,
    });

    if (response.status === 404) {
      return notFound();
    }

    if (!response.ok) {
      throw new Error('Failed to fetch data. ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    const error = e as Error;

    if (error.message.includes('Failed to fetch data.')) {
      throw new Error(error.message);
    }

    if (error.message.includes('404')) {
      notFound();
    }

    throw new Error('server-connection');
  }
}
