import { Link } from '@/app/components/catalyst/link';
import { Logo } from '@/app/components/logo';
import {
  Navbar as BaseNavbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from '@/app/components/catalyst/navbar';
import {
  Sidebar as BaseSidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from '@/app/components/catalyst/sidebar';

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Portfolio', url: '/portfolio' },
  { label: 'Contact', url: '/contact' },
];

export function Navbar() {
  return (
    <BaseNavbar className="md:px-8 md:py-8">
      <Link href="/" aria-label="Home" className="w-[250px]">
        <Logo />
      </Link>
      <NavbarSpacer />
      <NavbarSection className="max-md:hidden">
        {navItems.map((item) => (
          <NavbarItem key={item.label} href={item.url}>
            {item.label}
          </NavbarItem>
        ))}
      </NavbarSection>
    </BaseNavbar>
  );
}

export function Sidebar() {
  return (
    <BaseSidebar>
      <SidebarHeader>
        <Link href="/" aria-label="Home" className="w-[250px]">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map((item) => (
            <SidebarItem key={item.label} href={item.url}>
              {item.label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </BaseSidebar>
  );
}
