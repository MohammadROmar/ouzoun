import CheckMarkIcon from '@/assets/icons/check-mark';

type FeatureProps = {
  title: string;
  body: string;
};

function Feature({ title, body }: FeatureProps) {
  return (
    <li className="flex items-start gap-4">
      <div
        aria-hidden
        className="text-bg-primary bg-green dark:bg-green-light mt-2 box-content rounded-full p-0.5"
      >
        <CheckMarkIcon className="aspect-square size-3" />
      </div>

      <div>
        <h3 className="ltr:font-ubuntu inline font-medium">
          <span>{title}</span>
          <span className="text-green dark:text-green-light">: </span>
        </h3>
        <p className="text-gray inline text-sm">{body}</p>
      </div>
    </li>
  );
}

export default Feature;
