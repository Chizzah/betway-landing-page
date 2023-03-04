import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useLinkColorStore } from '../zustand/useLinkColor';
import { useQuery } from 'react-query';
import { getDataFromApi } from '../utils/getDataFromApi';
import Modal from './Modal';

const url = import.meta.env.VITE_SIGN_IN_URL;

const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, { message: 'This field is required' })
    .min(8, { message: 'Password must have a minimum of 8 characters' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

type LoginProps = {
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ isLoginOpen, setIsLoginOpen }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { data } = useQuery<APIData>('data', getDataFromApi);

  const { color } = useLinkColorStore();

  const onSubmit = async (data: LoginSchema) => {
    const formData = { email: data.username, password: data.password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      const data = await response.json();
      console.log(`Welcome, ${data.name}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}>
      <div className="w-full bg-white">
        <div className="flex flex-col w-full h-full">
          <div className="py-4 text-center text-gray-500 border-b border-gray-200">
            <h2 className="mb-2 text-2xl font-bold text-gray-600">
              {data?.loginContent.title}
            </h2>
            <div>
              {data?.loginContent.subTitle}{' '}
              <span className="relative font-semibold" style={{ color: color }}>
                {data?.loginContent.linkText}
                <div
                  className="absolute bottom-0 left-0 w-full border-b border-dotted"
                  style={{ borderColor: color }}
                />
              </span>
            </div>
          </div>
          <form
            className="p-6 text-sm text-gray-600"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label className="flex flex-col" htmlFor="username">
                <span>{data?.loginContent.formContent.username}</span>
                <input
                  className={`text-sm placeholder-gray-500 border-gray-300 focus:ring-0 focus:outline-none focus:border-cyan-300`}
                  type="text"
                  {...register('username')}
                  placeholder="Username"
                />
                <div className="h-5">
                  {errors.username?.message && (
                    <p className="text-xs italic text-red-600">
                      {errors.username?.message}
                    </p>
                  )}
                </div>
              </label>
              <label className="flex flex-col" htmlFor="password">
                <span>{data?.loginContent.formContent.password}</span>
                <input
                  className={`text-sm placeholder-gray-500 border-gray-300 focus:ring-0 focus:outline-none focus:border-cyan-300`}
                  type="password"
                  {...register('password')}
                  placeholder="Password"
                />
                <div className="h-5">
                  {errors.password?.message && (
                    <p className="text-xs italic text-red-600">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
              </label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="px-20 py-3 mb-2 font-bold text-white"
                style={{ backgroundColor: color }}
              >
                {data?.loginContent.formContent.buttonText}
              </button>
              <p className="text-xs font-bold" style={{ color: color }}>
                {data?.loginContent.formContent.extraText}
              </p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
