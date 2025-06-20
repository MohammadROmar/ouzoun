import AddIcon from '@/assets/icons/add';
import { Link } from '@/i18n/navigation';

type AddProductButtonProps = { label: string; href: string };

function AddProductButton({ label, href }: AddProductButtonProps) {
  return (
    <Link
      href={href}
      className="button flex items-center gap-2 max-sm:p-2"
      aria-label={label}
      title={label}
    >
      <AddIcon className="size-5 max-md:size-7" />
      <span aria-hidden className="max-sm:hidden">
        {label}
      </span>
    </Link>
  );
}

export default AddProductButton;
