import { NavLink } from 'react-router-dom';
import { MENU_LINKS } from './types';

export const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {MENU_LINKS.map((link) => (
        <NavLink 
          key={link.path} 
          to={link.path} 
          className={({ isActive }) => `
            px-4 py-2 rounded-full text-sm font-medium transition-all
            ${isActive 
              ? 'bg-brand-quirk/10 text-brand-quirk' 
              : 'text-text-body hover:bg-surface-ink hover:text-text-title'
            }
          `}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};