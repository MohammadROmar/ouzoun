import { Link } from '@/i18n/navigation';

type UserActionsProps = {
  changePassword: { label: string; href: string };
};

async function UserActions({ changePassword }: UserActionsProps) {
  return (
    <section className="mt-4 flex items-center justify-center md:gap-4">
      <Link
        href={changePassword.href}
        className="button flex w-full max-w-md items-center justify-center"
      >
        {changePassword.label}
      </Link>
    </section>
  );
}

export default UserActions;
