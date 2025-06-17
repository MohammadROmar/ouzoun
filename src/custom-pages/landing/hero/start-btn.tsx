import { Link } from '@/i18n/navigation';
import CurvedArrrowIcon from '@/assets/icons/curved-arrow';
import PatternIcon from '@/assets/icons/patterns/pattern1';

type StartButtonProps = { label: string };

function StartButton({ label }: StartButtonProps) {
  return (
    <div className="relative w-fit">
      <Link
        href="/sign-in"
        className="button flex items-center gap-3 text-xl font-medium md:text-2xl"
      >
        <p>{label}</p>
        <CurvedArrrowIcon className="size-3" />
      </Link>

      <PatternIcon className="absolute top-1/2 -z-10 size-14 -translate-y-1/2 ltr:right-0 ltr:translate-x-1/5 rtl:left-0 rtl:-translate-x-1/5" />
    </div>
  );
}

export default StartButton;
