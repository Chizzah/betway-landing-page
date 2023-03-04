import { useLinkColorStore } from '../zustand/useLinkColor';

export default function NavBar() {
  const { color, activeLink, setActiveLink } = useLinkColorStore();

  return (
    <nav className="z-10 w-full bg-black bg-opacity-50">
      <ul className="flex items-center justify-between">
        <li className="w-1/5">
          <button
            className="w-full py-3 text-xs font-bold text-white"
            onClick={() => setActiveLink('sports')}
            style={{
              borderBottom: activeLink === 'sports' ? `4px solid ${color}` : '',
            }}
          >
            sports
          </button>
        </li>
        <li className="w-1/5">
          <button
            className="w-full py-3 text-xs font-bold text-white"
            onClick={() => setActiveLink('live & real')}
            style={{
              borderBottom:
                activeLink === 'live & real' ? `4px solid ${color}` : '',
            }}
          >
            live & real
          </button>
        </li>
        <li className="w-1/5">
          <button
            className="w-full py-3 text-xs font-bold text-white"
            onClick={() => setActiveLink('casino')}
            style={{
              borderBottom: activeLink === 'casino' ? `4px solid ${color}` : '',
            }}
          >
            casino
          </button>
        </li>
        <li className="w-1/5">
          <button
            className="w-full py-3 text-xs font-bold text-white"
            onClick={() => setActiveLink('esports')}
            style={{
              borderBottom:
                activeLink === 'esports' ? `4px solid ${color}` : '',
            }}
          >
            esports
          </button>
        </li>
        <li className="w-1/5">
          <button
            className="w-full py-3 text-xs font-bold text-white"
            onClick={() => setActiveLink('vegas')}
            style={{
              borderBottom: activeLink === 'vegas' ? `4px solid ${color}` : '',
            }}
          >
            vegas
          </button>
        </li>
      </ul>
    </nav>
  );
}
