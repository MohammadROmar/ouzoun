import Input from '@/components/ui/input';
import Fieldset from '../fieldset';
import type { ImplantActionState } from '@/actions/implant';
import type { TFunction } from '@/models/t-function';

type ImplantSourceAndStockProps = {
  t: TFunction;
  state: ImplantActionState;
};

function ImplantSourceAndStock({ t, state }: ImplantSourceAndStockProps) {
  const { defaultValues, errors } = state;

  return (
    <Fieldset title={t('titles.source-stock')}>
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
