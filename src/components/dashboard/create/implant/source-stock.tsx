import Input from '@/components/ui/input';
import Fieldset from '../fieldset';
import type { CreateImplantActionState } from '@/actions/create-implant';
import type { TFunction } from '@/models/t-function';

type ImplantSourceAndStockProps = {
  t: TFunction;
  state: CreateImplantActionState;
};

function ImplantSourceAndStock({ t, state }: ImplantSourceAndStockProps) {
  const { defaultValues, errors } = state;

  return (
    <Fieldset title={t('source-stock')}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="brand"
          label={t('brand')}
          type="text"
          required
          autoComplete="off"
          className="rounded-xl"
          defaultValue={defaultValues?.brand}
          error={errors?.brand ? t('error', { field: t('brand') }) : undefined}
        />
        <Input
          id="quantity"
          label={t('quantity')}
          type="number"
          min={0}
          defaultValue={defaultValues?.quantity ?? 0}
          required
          className="rounded-xl"
          error={
            errors?.quantity ? t('error', { field: t('quantity') }) : undefined
          }
        />
      </div>
    </Fieldset>
  );
}

export default ImplantSourceAndStock;
