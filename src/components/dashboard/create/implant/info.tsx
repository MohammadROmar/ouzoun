import Input from '@/components/ui/input';
import Fieldset from '../fieldset';

type ImplantInfoProps = { t: (key: string) => string };

export default function ImplantInfo({ t }: ImplantInfoProps) {
  return (
    <Fieldset
      title={t('info')}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      <div className="mb-0 grid grid-rows-[auto_auto_1fr] gap-2">
        <Input
          id="name"
          label="Name"
          type="text"
          required
          autoComplete="off"
          className="rounded-lg"
        />
        <Input
          id="kit-id"
          label={t('kit-id')}
          type="text"
          required
          autoComplete="off"
          className="rounded-lg"
        />
        <Input
          as="textarea"
          id="description"
          label={t('description')}
          required
          className="h-full resize-none rounded-xl"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="bg-green aspect-square w-full max-w-56 rounded-xl mask-auto" />

        <div className="flex flex-col items-center space-y-2 rounded-lg border border-dashed p-2">
          <p className="flex flex-col items-center text-center">
            <span>{t('image.dnd')}</span>
            <span className="text-gray underline underline-offset-2">
              {t('image.or')}
            </span>
          </p>

          <button className="button w-fit rounded-lg">
            {t('image.select')}
          </button>
        </div>
      </div>
    </Fieldset>
  );
}
