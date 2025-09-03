import type { TFunction } from '@/core/models/t-function';

type ResetPasswordErrorsProps = {
  message?: string;
  t: TFunction;
};

function ResetPasswordErrors({ message, t }: ResetPasswordErrorsProps) {
  let error = '';

  if (message === 'invalid-input') {
    error = t('error', { field: t('passwords') });
  } else if (message === 'try-again') {
    error = t('try-again');
  } else if (message === 'failed-to-submit') {
    error = t('error', { field: t('passwords') });
  } else if (message === 'server-connection') {
    error = t('server-connection');
  }

  if (error === '') return null;

  return <p className="error-text">{error}</p>;
}

export default ResetPasswordErrors;
