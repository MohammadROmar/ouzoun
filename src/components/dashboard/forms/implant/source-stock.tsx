import Input from '@/components/ui/input';
import Fieldset from '../fieldset';
import BoxIcon from '@/assets/icons/box';
import type { ImplantFieldsetProps } from '.';

function ImplantSourceAndStock({ t, state }: ImplantFieldsetProps) {
  const { defaultValues, errors } = state;

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
          defaultValue={defaultValues?.quantity ?? 0}
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

export default ImplantSourceAndStock;
