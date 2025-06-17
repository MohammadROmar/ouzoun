import clsx from 'clsx';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type FieldsetProps = { title: string } & PropsWithChildren &
  ComponentPropsWithoutRef<'fieldset'>;

export default function Fieldset({ title, children, ...props }: FieldsetProps) {
  return (
    <fieldset {...props} className={clsx('space-y-2', props.className)}>
      <legend className="text-green text-2xl md:text-3xl">{title}</legend>

      {children}
    </fieldset>
  );
}
