import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type InputProps = {
  id: string;
  label: string;
  error?: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ id, label, error, ...props }: InputProps) {
  return (
    <>
      <p className={clsx('flex flex-col gap-2', props.className)}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          {...props}
          className="border-gray w-full rounded-full border px-4 py-2 outline-none"
        />
      </p>

      {error && (
        <p className="mt-1 text-sm text-red-400" aria-live="polite">
          {error}
        </p>
      )}
    </>
  );
}
