import Input from '@/components/ui/input';
import Fieldset from '../fieldset';

type ImplantSourceAndStockProps = { t: (key: string) => string };

function ImplantSourceAndStock({ t }: ImplantSourceAndStockProps) {
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
        />
        <Input
          id="quantity"
          label={t('quantity')}
          type="number"
          min={0}
          defaultValue={0}
          required
          className="rounded-xl"
        />
      </div>
    </Fieldset>
  );
}

export default ImplantSourceAndStock;
