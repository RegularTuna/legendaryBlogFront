import { Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2 group">
    <div className="bg-brand-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md">
      <Feather className="text-brand-punchline w-5 h-5" />
    </div>
    <span className="font-bold text-xl tracking-tight text-text-title">
      Legendary<span className="text-brand-primary">Blog</span>
    </span>
  </Link>
);