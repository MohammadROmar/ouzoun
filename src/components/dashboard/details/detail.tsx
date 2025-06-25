import { SVGProps, type FC, type ComponentPropsWithoutRef } from 'react';

type DetailProps = {
  title: string;
  details: { [key: string]: string } | string;
  icon: FC<SVGProps<SVGElement>>;
} & ComponentPropsWithoutRef<'section'>;

function Detail({ title, icon: Icon, details }: DetailProps) {
  return (
    <section className="bg-bg-primary card-shadow rounded-xl p-4">
      <div className="grid grid-cols-[1.75rem_auto] items-center gap-2">
        <Icon className="text-green size-7" />

        <h3 className="ltr:font-ubuntu text-green w-fit text-xl md:text-2xl">
          {title}
        </h3>
      </div>

      <hr className="text-green my-3" />

      {typeof details === 'string' ? (
        <p className="max-md:text-sm">{details}</p>
      ) : (
        <ul>
          {Object.entries(details).map(([key, value]) => (
            <li key={key ? `${key}-${value}` : value}>
              <p className="flex whitespace-pre max-md:justify-between max-md:text-sm">
                <span>{key}</span>
                <span className="max-md:hidden">: </span>
                <span className="md:text-gray">{value}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Detail;
