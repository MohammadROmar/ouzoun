import clsx from 'clsx';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  align: 'text-start' | 'text-center';
};

function SectionTitle({ title, subtitle, align }: SectionTitleProps) {
  return (
    <>
      <h2 className={clsx('text-green dark:text-green-light text-lg', align)}>
        {title}
      </h2>
      <h3
        className={clsx(
          'ltr:font-ubuntu text-2xl font-medium md:text-3xl lg:text-4xl',
          align,
        )}
      >
        {subtitle}
      </h3>
    </>
  );
}

export default SectionTitle;
