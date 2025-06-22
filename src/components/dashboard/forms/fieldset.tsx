import clsx from 'clsx';
import {
  SVGProps,
  type FC,
  type PropsWithChildren,
  type ComponentPropsWithoutRef,
} from 'react';

type FieldsetProps = PropsWithChildren & {
  title: string;
  icon: FC<SVGProps<SVGElement>>;
} & ComponentPropsWithoutRef<'fieldset'>;

function Fieldset({ title, icon: Icon, children, ...props }: FieldsetProps) {
  return (
    <fieldset {...props} className={clsx('space-y-2', props.className)}>
      <legend className="text-green grid grid-cols-[1.75rem_1fr] place-items-center gap-2 text-2xl md:text-3xl">
        <span>
          <Icon className="size-7" />
        </span>
        <span>{title}</span>
      </legend>

      {children}
    </fieldset>
  );
}

export default Fieldset;
