import Input from '@/components/ui/input';
import Fieldset from '../fieldset';
import type { ImplantActionState } from '@/actions/implant';
import type { TFunction } from '@/models/t-function';

type ImplantDimentionsProps = {
  t: TFunction;
  state: ImplantActionState;
};

function ImplantDimentions({ t, state }: ImplantDimentionsProps) {
  const { defaultValues, errors } = state;

  return (
    <Fieldset title={t('titles.dimensions')}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="width"
          label={`${t('item.width')} (${t('item.unit-mm')})`}
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
          label={`${t('item.height')} (${t('item.unit-mm')})`}
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
          id="radius"
          label={`${t('item.radius')} (${t('item.unit-mm')})`}
          type="number"
          min={0}
          required
          step="any"
          defaultValue={defaultValues?.radius ?? 0}
          error={
            errors?.radius ? t('error', { field: t('item.radius') }) : undefined
          }
        />
      </div>
    </Fieldset>
  );
}

export default ImplantDimentions;
