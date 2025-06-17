import type { ComponentPropsWithoutRef } from 'react';

type DetailProps = {
  title: string;
  details: { [key: string]: string } | string;
} & ComponentPropsWithoutRef<'section'>;

export default function Detail({ title, details }: DetailProps) {
  return (
    <section>
      <h3 className="ltr:font-ubuntu text-green text-xl md:text-2xl">
        # {title}
      </h3>

      {typeof details === 'string' ? (
        <p className="ltr:ml-8 rtl:mr-8">{details}</p>
      ) : (
        <ul className="ltr:ml-8 rtl:mr-8">
          {Object.entries(details).map(([key, value]) => (
            <li
              key={key ? `${key}-${value}` : value}
              className="whitespace-pre"
            >
              {key && <span className="font-semibold">{key}: </span>}
              <span>{value}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
