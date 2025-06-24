'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, memo } from 'react';
import clsx from 'clsx';

import { useDropzoneImage } from '@/hooks/use-dropzone-image';
import type { TFunction } from '@/models/t-function';

type DropzoneImageProps = { hasError?: boolean; defaultImage?: File };

function DropzoneImage({ hasError, defaultImage }: DropzoneImageProps) {
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
      <div
        className={clsx(
          'bg-bg-primary relative flex size-full cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-dashed !outline-current',
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
          id="image"
          name="image"
          type="file"
          accept="image/*"
          required
          className="cursor-default"
          aria-invalid={hasError || !!error}
          {...getInputProps()}
        />
      </div>

      {hasError ||
        (error && (
          <p aria-live="polite" className="mt-1 text-sm text-red-400">
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
