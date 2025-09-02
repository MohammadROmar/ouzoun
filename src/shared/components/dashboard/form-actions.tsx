'use client';

import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

import LoadingSpinner from '@/assets/icons/loading-spinner';

type ActionsProps = { action: 'CREATE' | 'EDIT' };

export default function FormActions({ action }: ActionsProps) {
  const { pending } = useFormStatus();

  const t = useTranslations('implants-page.actions');

  return (
    <div className="mt-4 flex items-center justify-end gap-2">
      <button disabled={pending} className="button rounded-lg" type="reset">
        {t('reset')}
      </button>
      <button disabled={pending} className="button rounded-lg">
        {pending ? (
          <LoadingSpinner className="size-6 animate-spin" />
        ) : (
          t(action === 'CREATE' ? 'add' : 'edit')
        )}
      </button>
    </div>
  );
}
