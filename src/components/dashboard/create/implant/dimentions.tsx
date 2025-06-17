import Input from '@/components/ui/input';
import Fieldset from '../fieldset';

type ImplantDimentionsProps = { t: (key: string) => string };

function ImplantDimentions({ t }: ImplantDimentionsProps) {
  return (
    <Fieldset title={t('dimensions')}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="width"
          label={`${t('width')} (${t('unit-mm')})`}
          type="number"
          min={0}
          defaultValue={0}
          required
          className="rounded-xl"
        />
        <Input
          id="height"
          label={`${t('height')} (${t('unit-mm')})`}
          type="number"
          min={0}
          defaultValue={0}
          required
          className="rounded-xl"
        />
        <Input
          id="radius"
          label={`${t('radius')} (${t('unit-mm')})`}
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

export default ImplantDimentions;
