import NavLink from './link';
import { dashboardNavigation } from '@/data/navigation/dashboard';

export default async function DashboardNavigation() {
  const navLinks = await dashboardNavigation();

  return (
    <nav>
      <ul className="mt-2 space-y-2">
        {navLinks.map(({ label, to, icon: Icon }) => (
          <NavLink key={label} label={label} to={to}>
            <Icon className="size-7 md:size-5" />
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
