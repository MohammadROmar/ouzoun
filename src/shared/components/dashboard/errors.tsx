import { useTranslations } from 'next-intl';

type FormErrorsProps = { message?: string };

function FormErrors({ message }: FormErrorsProps) {
  const t = useTranslations('errors');

  if (
    message === undefined ||
    message === 'success' ||
    message === 'invalid-input'
  ) {
    return null;
  }

  return (
    <p className="text-danger mt-2 text-sm whitespace-pre-wrap">
      {t.has(message) ? t(message) : t('unknown')}
    </p>
  );
}

export default FormErrors;
