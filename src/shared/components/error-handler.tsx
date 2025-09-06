import { notFound } from 'next/navigation';

import Error from '@/shared/components/error';

type ErrorHandlerProps = {
  message: 'fetch-error' | 'server-connection';
  status: number;
};

function ErrorHandler({ message, status }: ErrorHandlerProps) {
  if (status === 404) {
    return notFound();
  } else if (status === 401 || status === 403) {
    return <Error message={'unauthorized'} />;
  }

  return <Error message={message} />;
}

export default ErrorHandler;
