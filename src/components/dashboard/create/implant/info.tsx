import Input from '@/components/ui/input';
import Fieldset from '../fieldset';
import ImplantImage from './image';
import type { CreateImplantActionState } from '@/actions/implant/create';
import type { TFunction } from '@/models/t-function';

type ImplantInfoProps = {
  t: TFunction;
  state: CreateImplantActionState;
};

export default function ImplantInfo({ t, state }: ImplantInfoProps) {
  const { defaultValues, errors } = state;

  return (
    <Fieldset
      title={t('titles.info')}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      <div className="mb-0 grid grid-rows-[auto_auto_1fr] gap-2">
        <Input
          id="name"
          label={t('item.name')}
          type="text"
          required
          autoComplete="off"
          className="rounded-lg"
          defaultValue={defaultValues?.name}
          error={
            errors?.name ? t('error', { field: t('item.name') }) : undefined
          }
        />
        <Input
          id="kit-id"
          label={t('item.kit-id')}
          type="text"
          required
          autoComplete="off"
          className="rounded-lg"
          defaultValue={defaultValues?.['kit-id']}
          error={
            errors?.['kit-id']
              ? t('error', { field: t('item.kit-id') })
              : undefined
          }
        />
        <Input
          as="textarea"
          id="description"
          label={t('item.description')}
          required
          rows={4}
          className="h-full resize-none rounded-xl"
          defaultValue={defaultValues?.description}
          error={
            errors?.description
              ? t('error', { field: t('item.description') })
              : undefined
          }
        />
      </div>

      <ImplantImage t={t} hasError={errors?.image} />
    </Fieldset>
  );
}
