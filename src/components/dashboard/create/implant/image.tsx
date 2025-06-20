'use client';

import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';

import { useDropzoneImage } from '@/hooks/use-dropzone-image';
import type { TFunction } from '@/models/t-function';

type ImplantImageProps = { t: TFunction; hasError?: boolean };

function ImplantImage({ t, hasError }: ImplantImageProps) {
  const { image, error, getRootProps, getInputProps, isDragActive } =
    useDropzoneImage();

  return (
    <div className="size-full max-md:m-auto max-md:aspect-square max-md:w-full max-md:max-w-56">
      <div
        className={clsx(
          'relative flex size-full cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-dashed !outline-current',
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
            {t('image.drop')}
          </p>
        )}

        <label htmlFor="image" className="sr-only">
          {t('image.sr')}
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          required
          className="cursor-default"
          {...getInputProps()}
        />
      </div>

      {hasError ||
        (error && (
          <p className="mt-1 text-sm text-red-400" aria-live="polite">
            {hasError
              ? t('error', { field: t('item.image') })
              : t(`image.error-${error}`)}
          </p>
        ))}
    </div>
  );
}

export default ImplantImage;

const DNDText = memo(function DNDText({ t }: { t: TFunction }) {
  return (
    <p
      aria-live="polite"
      className="flex flex-col items-center p-2 text-center"
    >
      <span>{t('image.dnd')}</span>
      <span className="text-gray underline underline-offset-2">
        {t('image.or')}
      </span>
      <span className="button mt-2">{t('image.select')}</span>
    </p>
  );
});
