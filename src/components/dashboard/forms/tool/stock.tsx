import Fieldset from '../fieldset';
import Input from '@/components/ui/input';
import BoxIcon from '@/assets/icons/box';
import type { ToolFieldsetProps } from '.';

export default function ToolStock({ state, t }: ToolFieldsetProps) {
  const { errors, defaultValues } = state;

  return (
    <Fieldset icon={BoxIcon} title={t('titles.stock')}>
      <Input
        id="quantity"
        label={t('item.quantity')}
        type="number"
        min={0}
        defaultValue={defaultValues?.quantity ?? 0}
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
