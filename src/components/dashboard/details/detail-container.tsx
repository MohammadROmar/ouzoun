import { SVGProps, type FC, type PropsWithChildren } from 'react';

export type DetailContainerProps = PropsWithChildren & {
  title: string;
  icon: FC<SVGProps<SVGElement>>;
};

function DetailContainer({
  title,
  icon: Icon,
  children,
}: DetailContainerProps) {
  return (
    <section className="bg-bg-primary card-shadow rounded-xl p-4">
      <div className="grid grid-cols-[1.75rem_auto] items-center gap-2">
        <Icon className="text-green size-7" />

        <h3 className="ltr:font-ubuntu text-green w-fit text-xl md:text-2xl">
          {title}
        </h3>
      </div>

      <hr className="text-green my-3" />

      {children}
    </section>
  );
}

export default DetailContainer;
