import Input from '@/components/ui/input';
import Fieldset from '../fieldset';
import type { CreateImplantActionState } from '@/actions/create-implant';
import type { TFunction } from '@/models/t-function';

type ImplantDimentionsProps = {
  t: TFunction;
  state: CreateImplantActionState;
};

function ImplantDimentions({ t, state }: ImplantDimentionsProps) {
  const { defaultValues, errors } = state;

  return (
    <Fieldset title={t('dimensions')}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="width"
          label={`${t('width')} (${t('unit-mm')})`}
          type="number"
          min={0}
          required
          className="rounded-xl"
          defaultValue={defaultValues?.width ?? 0}
          error={errors?.width ? t('error', { field: t('width') }) : undefined}
        />
        <Input
          id="height"
          label={`${t('height')} (${t('unit-mm')})`}
          type="number"
          min={0}
          required
          className="rounded-xl"
          defaultValue={defaultValues?.height ?? 0}
          error={
            errors?.height ? t('error', { field: t('height') }) : undefined
          }
        />
        <Input
          id="radius"
          label={`${t('radius')} (${t('unit-mm')})`}
          type="number"
          min={0}
          required
          className="rounded-xl"
          defaultValue={defaultValues?.radius ?? 0}
          error={
            errors?.radius ? t('error', { field: t('radius') }) : undefined
          }
        />
      </div>
    </Fieldset>
  );
}

export default ImplantDimentions;
