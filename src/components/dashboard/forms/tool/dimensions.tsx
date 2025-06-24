import Fieldset from '../fieldset';
import Input from '@/components/ui/input';
import DimensionsIcon from '@/assets/icons/dimensions';
import type { ToolFieldsetProps } from '.';

export default function ToolDimensions({ state, t }: ToolFieldsetProps) {
  const { errors, defaultValues } = state;

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
          defaultValue={defaultValues?.width ?? 0}
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
          defaultValue={defaultValues?.height ?? 0}
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
          defaultValue={defaultValues?.thickness ?? 0}
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
