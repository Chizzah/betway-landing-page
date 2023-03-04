import { useQuery } from 'react-query';

import { getDataFromApi } from '../utils/getDataFromApi';
import { useLinkColorStore } from '../zustand/useLinkColor';

export default function CTA() {
  const { data } = useQuery<APIData>('data', getDataFromApi);
  const { activeLink, color } = useLinkColorStore();

  return (
    <section className="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50">
      <div className="w-8/12 mx-auto mt-4 md:w-4/12 lg:w-3/12">
        <h2 className="mb-1.5 text-xs uppercase">
          {activeLink} {data?.ctaContent.subTitle}
        </h2>
        <h1 className="mb-2 text-xl font-bold">{data?.ctaContent.title}</h1>
        <button
          className="w-full py-2 mb-2.5 font-bold capitalize shadow shadow-slate-600 hover:bg-opacity-80 hover:animate-bounce"
          style={{ backgroundColor: color }}
        >
          join now
        </button>
      </div>
    </section>
  );
}
