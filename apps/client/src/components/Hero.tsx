import { useQuery } from 'react-query';
import { getDataFromApi } from '../utils/getDataFromApi';

import CTA from './CTA';

const url = import.meta.env.VITE_API_URL;

export default function Hero() {
  const { data } = useQuery<APIData>('data', getDataFromApi);

  return (
    <section className="absolute top-0 left-0 w-full h-full bg-slate-600">
      <div className="relative w-full h-full">
        <img
          className="object-cover w-full h-full"
          src={`${url}/${data?.heroImg}`}
          alt="Man in suite with a the Hunch headband on"
          width="750px"
          height="1174px"
        />
        <CTA />
      </div>
    </section>
  );
}
