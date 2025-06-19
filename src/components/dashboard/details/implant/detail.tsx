import { SVGProps, type FC, type ComponentPropsWithoutRef } from 'react';

type DetailProps = {
  title: string;
  details: { [key: string]: string } | string;
  icon: FC<SVGProps<SVGSVGElement>>;
} & ComponentPropsWithoutRef<'section'>;

function Detail({ title, icon: Icon, details }: DetailProps) {
  return (
    <section className="flex items-start gap-2">
      <Icon className="text-green size-7" />

      <div>
        <h3 className="ltr:font-ubuntu text-green text-xl md:text-2xl">
          {title}
        </h3>

        {typeof details === 'string' ? (
          <p>{details}</p>
        ) : (
          <ul>
            {Object.entries(details).map(([key, value]) => (
              <li key={key ? `${key}-${value}` : value}>
                <p className="whitespace-pre">
                  {key && <span className="font-semibold">{key}: </span>}
                  <span>{value}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Detail;
