export interface NavItem {
    label: string;
    path: string;
}

export const MENU_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Posts', path: '/allposts' },
  
];