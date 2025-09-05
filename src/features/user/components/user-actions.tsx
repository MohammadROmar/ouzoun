import { Link } from '@/i18n/navigation';

type UserActionsProps = {
  edit: { label: string; href: string };
  changePassword: { label: string; href: string };
};

async function UserActions({ edit, changePassword }: UserActionsProps) {
  return (
    <section className="mt-4 flex gap-2 max-md:flex-col md:gap-4">
      <Link
        href={edit.href}
        className="button flex w-full items-center justify-center"
      >
        {edit.label}
      </Link>
      <Link
        href={changePassword.href}
        className="button border-green !text-green flex w-full items-center justify-center border !bg-transparent"
      >
        {changePassword.label}
      </Link>
    </section>
  );
}

export default UserActions;
