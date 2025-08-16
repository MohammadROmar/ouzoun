'use client';

import { useTranslations } from 'next-intl';

import { useToolState } from '@/store/tool-state';
import Fieldset from '../fieldset';
import Input from '@/components/ui/input';
import DimensionsIcon from '@/assets/icons/dimensions';

export default function ToolDimensions() {
  const t = useTranslations('tools-page');
  const { errors, defaultValues } = useToolState();

  return (
    <Fieldset icon={DimensionsIcon} title={t('titles.dimensions')}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="width"
          label={`${t('item.width')} (${t('item.unit-cm')})`}
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
          label={`${t('item.height')} (${t('item.unit-cm')})`}
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
          id="thickness"
          label={`${t('item.thickness')} (${t('item.unit-cm')})`}
          type="number"
          min={0}
          required
          step="any"
          defaultValue={defaultValues?.thickness}
          error={
            errors?.thickness
              ? t('error', { field: t('item.thickness') })
              : undefined
          }
        />
      </div>
    </Fieldset>
  );
}
