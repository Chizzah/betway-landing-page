import { create } from 'zustand';
import { getColorForLink } from '../utils/getColorForLink';

type LinkColorStore = {
  activeLink: 'sports' | 'live & real' | 'casino' | 'esports' | 'vegas';
  color: string;
  setActiveLink: (
    link: 'sports' | 'live & real' | 'casino' | 'esports' | 'vegas'
  ) => void;
};

export const useLinkColorStore = create<LinkColorStore>((set) => ({
  activeLink: 'sports',
  color: getColorForLink('sports'),
  setActiveLink: (link) => {
    set((state) => ({
      ...state,
      activeLink: link,
      color: getColorForLink(link),
    }));
  },
}));
