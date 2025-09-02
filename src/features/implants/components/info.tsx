'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { useImplantState } from '../store/implant-state';
import Fieldset from '../../../shared/components/dashboard/fieldset';
import Input from '@/shared/components/input';
import DropzoneImage from '../../../shared/components/dashboard/dropzone-image';
import InfoIcon from '@/assets/icons/info';
import { Kit } from '@/features/kits/models/kit';

const KitSelector = dynamic(
  () => import('../../kits/components/kit-selector'),
  { ssr: false },
);

type ImplantInfoProps = { kits: Kit[] };

export default function ImplantInfo({ kits }: ImplantInfoProps) {
  const { defaultValues, errors } = useImplantState();

  const t = useTranslations('implants-page');

  return (
    <Fieldset
      title={t('titles.info')}
      icon={InfoIcon}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      <div className="mb-0 grid grid-rows-[auto_auto_1fr] gap-2">
        <KitSelector
          label={t('item.kit-id')}
          required
          kits={kits}
          kitId={defaultValues?.kitId}
          noOption={t('no-option')}
          error={
            errors?.kitId ? t('error', { field: t('item.kit-id') }) : undefined
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
