import Breadcrumbs from './breadcrumbs';

type TitleProps = { title: string };

function Title({ title }: TitleProps) {
  return (
    <section className="space-y-2">
      <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">{title}</h1>

      <Breadcrumbs />
    </section>
  );
}

export default Title;
