import { useTranslations } from 'next-intl';

type FormErrorsProps = { message?: string };

function FormErrors({ message }: FormErrorsProps) {
  if (
    message === undefined ||
    message === 'success' ||
    message === 'invalid-input'
  )
    return null;

  const t = useTranslations('errors');

  return (
    <p className="text-danger mt-2 text-sm whitespace-pre-wrap">
      {t.has(message) ? t(message) : t('unknown')}
    </p>
  );
}

export default FormErrors;
