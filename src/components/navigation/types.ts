export interface NavItem {
    label: string;
    path: string;
}

export const MENU_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Posts', path: '/posts' },
  { label: 'About', path: '/about' },
];