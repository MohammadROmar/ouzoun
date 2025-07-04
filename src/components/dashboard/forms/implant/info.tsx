import dynamic from 'next/dynamic';

import Fieldset from '../fieldset';
import Input from '@/components/ui/input';
import DropzoneImage from '../dropzone-image';
import InfoIcon from '@/assets/icons/info';
import type { ImplantFieldsetProps } from '.';

const KitSelector = dynamic(() => import('./kit-selector'), { ssr: false });

export default function ImplantInfo({ t, state }: ImplantFieldsetProps) {
  const { defaultValues, errors } = state;

  return (
    <Fieldset
      title={t('titles.info')}
      icon={InfoIcon}
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

        <KitSelector
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
          className="h-full resize-none"
          defaultValue={defaultValues?.description}
          error={
            errors?.description
              ? t('error', { field: t('item.description') })
              : undefined
          }
        />
      </div>

      <DropzoneImage
        hasError={errors?.image}
        defaultImage={defaultValues?.image}
      />
    </Fieldset>
  );
}
