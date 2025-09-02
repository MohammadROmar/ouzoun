import { cookies } from 'next/headers';
import clsx from 'clsx';

import Layout from '@/shared/components/no-auth-layout';
import NotFoundPageContent from '@/shared/components/not-found';

export default async function NotFoundPage() {
  const isAuthenticated = (await cookies()).get('access-token')?.value;

  return (
    <Layout hasFooter={false}>
      <NotFoundPageContent
        className={clsx(
          'spacing',
          isAuthenticated && 'md:ltr:ml-64 md:rtl:mr-64',
        )}
      />
    </Layout>
  );
}
