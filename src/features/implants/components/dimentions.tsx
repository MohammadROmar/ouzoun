'use client';

import { useTranslations } from 'next-intl';

import { useImplantState } from '../store/implant-state';
import Fieldset from '../../../shared/components/dashboard/fieldset';
import Input from '@/shared/components/input';
import DimensionsIcon from '@/assets/icons/dimensions';

export default function ImplantDimentions() {
  const { defaultValues, errors } = useImplantState();

  const t = useTranslations('implants-page');

  return (
    <Fieldset title={t('titles.dimensions')} icon={DimensionsIcon}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="width"
          label={`${t('item.width')} (${t('item.unit-mm')})`}
          type="number"
          min={0}
          required
          step="any"
          defaultValue={defaultValues?.width}
          error={
            errors?.width ? t('error', { field: t('item.width') }) : undefined
          }
        />
        <Input
          id="height"
          label={`${t('item.height')} (${t('item.unit-mm')})`}
          type="number"
          min={0}
          required
          step="any"
          defaultValue={defaultValues?.height}
          error={
            errors?.height ? t('error', { field: t('item.height') }) : undefined
          }
        />
        <Input
          id="radius"
          label={`${t('item.radius')} (${t('item.unit-mm')})`}
          type="number"
          min={0}
          required
          step="any"
          defaultValue={defaultValues?.radius}
          error={
            errors?.radius ? t('error', { field: t('item.radius') }) : undefined
          }
        />
      </div>
    </Fieldset>
  );
}
