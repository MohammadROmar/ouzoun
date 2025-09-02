'use client';

import { useTranslations } from 'next-intl';

import { useImplantState } from '../store/implant-state';
import Input from '@/shared/components/input';
import Fieldset from '../../../shared/components/dashboard/fieldset';
import BoxIcon from '@/assets/icons/box';

export default function ImplantSourceAndStock() {
  const { defaultValues, errors } = useImplantState();

  const t = useTranslations('implants-page');

  return (
    <Fieldset icon={BoxIcon} title={t('titles.source-stock')}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="brand"
          label={t('item.brand')}
          type="text"
          required
          autoComplete="off"
          defaultValue={defaultValues?.brand}
          error={
            errors?.brand ? t('error', { field: t('item.brand') }) : undefined
          }
        />
        <Input
          id="quantity"
          label={t('item.quantity')}
          type="number"
          min={0}
          defaultValue={defaultValues?.quantity}
          required
          step="any"
          error={
            errors?.quantity
              ? t('error', { field: t('item.quantity') })
              : undefined
          }
        />
      </div>
    </Fieldset>
  );
}
