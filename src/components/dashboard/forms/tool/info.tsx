'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { useToolState } from '@/store/tool-state';
import Fieldset from '../fieldset';
import Input from '@/components/ui/input';
import DropzoneImage from '../dropzone-image';
import InfoIcon from '@/assets/icons/info';
import { Kit } from '@/models/kit';

const KitSelector = dynamic(() => import('../kit-selector'), { ssr: false });
const CategorySelector = dynamic(() => import('./category-selector'), {
  ssr: false,
});

type ToolInfoProps = { kits: Kit[] };

export default function ToolInfo({ kits }: ToolInfoProps) {
  const t = useTranslations('tools-page');
  const { errors, defaultValues } = useToolState();

  return (
    <Fieldset
      icon={InfoIcon}
      title={t('titles.info')}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      <div className="mb-0 space-y-2">
        <Input
          id="name"
          label={t('item.name')}
          type="text"
          required
          autoComplete="off"
          defaultValue={defaultValues?.name}
          error={
            errors?.name ? t('error', { field: t('item.name') }) : undefined
          }
        />
        <KitSelector
          label={t('item.kit-id')}
          kits={kits}
          kitId={defaultValues?.['kit-id']}
          noOption={t('no-option')}
          error={
            errors?.['kit-id']
              ? t('error', { field: t('item.kit-id') })
              : undefined
          }
        />
        <CategorySelector
          defaultValue={defaultValues?.['category-id']}
          error={
            errors?.['category-id']
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
