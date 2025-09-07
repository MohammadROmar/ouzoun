'use client';

import Image from 'next/image';
import { useEffect, memo } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

import { useDropzoneImage } from '@/shared/hooks/use-dropzone-image';
import WarningIcon from '@/assets/icons/warning';
import type { TFunction } from '@/core/models/t-function';

type DropzoneImageProps = {
  hasError?: boolean;
  defaultImage?: File;
  id?: string;
  required: boolean;
};

function DropzoneImage({
  hasError,
  defaultImage,
  id = 'image',
  required,
}: DropzoneImageProps) {
  const { image, error, getRootProps, getInputProps, isDragActive, setImage } =
    useDropzoneImage();

  const t = useTranslations('dnd-image');

  useEffect(() => {
    if (defaultImage) {
      setImage(undefined);
    }
  }, [defaultImage, setImage]);

  return (
    <div className="size-full max-md:m-auto max-md:aspect-square max-md:w-full max-md:max-w-56">
      {!required && (
        <p className="flex items-center gap-1 text-sm">
          <span>
            <WarningIcon className="text-warning size-4" />
          </span>
          <span className="text-warning">{t('note')}:</span>
          <span className="text-gray">{t('not-required')}</span>
        </p>
      )}

      <div
        className={clsx(
          'bg-bg-primary relative flex size-full cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed !outline-current',
          isDragActive && 'bg-green',
        )}
        {...getRootProps()}
      >
        {image && !isDragActive && (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 48rem) 14rem, 50vw"
            className="object-cover object-center"
          />
        )}

        {!image && !isDragActive && <DNDText t={t} />}

        {isDragActive && (
          <p aria-live="polite" className="p-2">
            {t('drop')}
          </p>
        )}

        <label htmlFor="image" className="sr-only">
          {t('sr')}
        </label>
        <input
          id={id}
          name={id}
          type="file"
          accept="image/*"
          required={required}
          className="cursor-default"
          aria-invalid={hasError || !!error}
          {...getInputProps()}
        />
      </div>

      {hasError ||
        (error && (
          <p aria-live="polite" className="error-text">
            {hasError ? t('error') : t(`error-${error}`)}
          </p>
        ))}
    </div>
  );
}

export default DropzoneImage;

const DNDText = memo(function DNDText({ t }: { t: TFunction }) {
  return (
    <p
      aria-live="polite"
      className="flex flex-col items-center p-2 text-center"
    >
      <span>{t('dnd')}</span>
      <span className="text-gray underline underline-offset-2">{t('or')}</span>
      <span className="button mt-2">{t('select')}</span>
    </p>
  );
});
