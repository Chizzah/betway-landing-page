import { useQuery } from 'react-query';

import { getDataFromApi } from '../utils/getDataFromApi';
import { useLinkColorStore } from '../zustand/useLinkColor';

const url = import.meta.env.VITE_API_URL;

type HeaderProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  setIsLoginOpen,
  setIsSignUpOpen,
}: HeaderProps) {
  const { data } = useQuery<APIData>('data', getDataFromApi);
  const { color } = useLinkColorStore();

  return (
    <header className="z-10 flex items-center justify-between w-full px-3 py-4 bg-black">
      <img
        className="w-20 h-auto"
        src={`${url}/${data?.headerContent.logo}`}
        alt="Betway white logo"
        width="538px"
        height="151px"
        loading="eager"
      />
      <div className="flex space-x-1">
        <button
          className="px-4 py-1 text-xs font-bold text-white rounded-sm hover:bg-opacity-80"
          onClick={() => setIsLoginOpen(true)}
          style={{ backgroundColor: color }}
        >
          {data?.headerContent.login}
        </button>
        <button
          className="px-4 py-1 text-xs font-bold bg-white rounded-sm hover:bg-opacity-80"
          onClick={() => setIsSignUpOpen(true)}
          style={{ border: `1px solid ${color}`, color: color }}
        >
          {data?.headerContent.signup}
        </button>
      </div>
    </header>
  );
}
