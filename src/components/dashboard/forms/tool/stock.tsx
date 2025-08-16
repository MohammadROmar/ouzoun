'use client';

import { useTranslations } from 'next-intl';

import { useToolState } from '@/store/tool-state';
import Fieldset from '../fieldset';
import Input from '@/components/ui/input';
import BoxIcon from '@/assets/icons/box';

export default function ToolStock() {
  const t = useTranslations('tools-page');
  const { errors, defaultValues } = useToolState();

  return (
    <Fieldset icon={BoxIcon} title={t('titles.stock')}>
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
    </Fieldset>
  );
}
