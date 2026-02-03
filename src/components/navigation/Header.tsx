import { Search, PenLine } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface-paper/80 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-8">
          <Logo />
          <NavLinks />
        </div>

        
        <div className="flex-1 max-w-md hidden lg:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-primary" />
            <input 
              type="text" 
              placeholder="Search funny stories..."
              className="w-full bg-surface-ink border-none rounded-full py-2 pl-10 pr-4 text-sm text-text-body focus:ring-2 focus:ring-brand-primary/20 focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-text-body hover:text-brand-primary px-4 transition-colors">
            <PenLine className="w-4 h-4" />
            Write
          </button>
          
          
          <button className="bg-text-title text-surface-paper text-sm font-bold px-6 py-2.5 rounded-full hover:bg-brand-primary transition-all active:scale-95 shadow-sm">
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
};