import { Search, PenLine, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import CustomButton from '../common/CustomButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Header = () => {

  const [isOpen,setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface-paper/80 backdrop-blur-md border-b border-surface-border ">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4 ">
        
        <div className="flex items-center gap-8">
          <Logo />
          <NavLinks className="hidden md:flex items-center gap-1"/>
        </div>

        
        <div className=" flex-1 max-w-md hidden lg:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-primary" />
            <input 
              type="text" 
              placeholder="Search something..."
              className="w-full bg-surface-ink border-none rounded-full py-2 pl-10 pr-4 text-sm text-text-body focus:ring-2 focus:ring-brand-primary/20 focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          
          
          {/* 3. Wrap your Button in a Link */}
          <Link to="/login"> 
            <CustomButton variant="primary" size="md" className="rounded-full px-6">
              Sign In
            </CustomButton>
          </Link>
        </div>

        <div className='   md:hidden'>
          <button onClick={()=>setIsOpen(true)}>
            <Menu size={30} className='bg-brand-primary text-surface-paper rounded-sm'/>
          </button>
          
        </div>
        
        <div 
          className={`fixed inset-0  transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />
          
        <div className={`fixed top-0 right-0 h-full w-[180px] bg-surface-ink  transition-transform duration-300 ease-in-out z-50   md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full '}`}>
          <div className=' flex flex-col h-full '>
            <div className="flex items-center bg-surface-ink/90 justify-between ">
              <span className="font-bold text-lg p-5">Menu</span>
              <button onClick={() => setIsOpen(false)} className="p-5 bg-surface-ink text-text-muted">
                <X size={24}  />
              </button>
            </div>
            <NavLinks onLinkClick={()=>setIsOpen(false)} className=" flex flex-col items-stretch gap-1 bg-surface-ink/70 rounded-b-md " />
            
          </div>
          
         
        </div>
      </div>
    </header>
  );
};