import { Search, PenLine } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import CustomButton from '../common/CustomButton';
import { Link } from 'react-router-dom';


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
              placeholder="Search something..."
              className="w-full bg-surface-ink border-none rounded-full py-2 pl-10 pr-4 text-sm text-text-body focus:ring-2 focus:ring-brand-primary/20 focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          
          
          {/* 3. Wrap your Button in a Link */}
          <Link to="/login"> 
            <CustomButton variant="primary" size="md" className="rounded-full px-6">
              Sign In
            </CustomButton>
          </Link>
        </div>

      </div>
    </header>
  );
};