import Fieldset from '../fieldset';
import Input from '@/components/ui/input';
import KitSelector from '../kit-selector';
import DropzoneImage from '../dropzone-image';
import InfoIcon from '@/assets/icons/info';
import type { ToolFieldsetProps } from '.';

export default function ToolInfo({ state, t }: ToolFieldsetProps) {
  const { errors, defaultValues } = state;

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
          kitId={defaultValues?.['kit-id']}
          error={
            errors?.['kit-id']
              ? t('error', { field: t('item.kit-id') })
              : undefined
          }
        />
        <Input
          id="category-id"
          label={t('item.category-id')}
          required
          rows={4}
          className="h-full resize-none"
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
