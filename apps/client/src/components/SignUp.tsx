import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useLinkColorStore } from '../zustand/useLinkColor';
import { useQuery } from 'react-query';
import { getDataFromApi } from '../utils/getDataFromApi';
import Modal from './Modal';

const url = import.meta.env.VITE_SIGN_IN_URL;

const signUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, { message: 'This field is required' })
    .min(8, { message: 'Password must have a minimum of 8 characters' }),
  firstName: z.string().min(1, { message: 'This field is required' }),
  lastName: z.string().min(1, { message: 'This field is required' }),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

type SignUpProps = {
  isSignUpOpen: boolean;
  setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignUp({ isSignUpOpen, setIsSignUpOpen }: SignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const { data } = useQuery<APIData>('data', getDataFromApi);

  const { color } = useLinkColorStore();

  const onSubmit = async (data: SignUpSchema) => {
    const formData = data;

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
    <Modal isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen}>
      <div className="w-full bg-white">
        <div className="flex flex-col w-full h-full">
          <div className="py-4 text-center text-gray-500 border-b border-gray-200">
            <h2 className="mb-2 text-2xl font-bold text-gray-600">
              {data?.signUpContent.title}
            </h2>
            <div>
              {data?.signUpContent.subTitle}{' '}
              <span className="relative font-semibold" style={{ color: color }}>
                {data?.signUpContent.linkText}
                <span
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
              <label className="flex flex-col" htmlFor="email">
                <span>{data?.signUpContent.formContent.email}</span>
                <input
                  className={`text-sm placeholder-gray-500 border-gray-300 focus:ring-0 focus:outline-none focus:border-cyan-300`}
                  type="text"
                  {...register('email')}
                  placeholder="Username"
                />
                <div className="h-5">
                  {errors.email?.message && (
                    <p className="text-xs italic text-red-600">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
              </label>
              <label className="flex flex-col" htmlFor="password">
                <span>{data?.signUpContent.formContent.password}</span>
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
              <label className="flex flex-col" htmlFor="firstName">
                <span>{data?.signUpContent.formContent.firstName}</span>
                <input
                  className={`text-sm placeholder-gray-500 border-gray-300 focus:ring-0 focus:outline-none focus:border-cyan-300`}
                  type="text"
                  {...register('firstName')}
                  placeholder="Username"
                />
                <div className="h-5">
                  {errors.firstName?.message && (
                    <p className="text-xs italic text-red-600">
                      {errors.firstName?.message}
                    </p>
                  )}
                </div>
              </label>
              <label className="flex flex-col" htmlFor="lastName">
                <span>{data?.signUpContent.formContent.lastName}</span>
                <input
                  className={`text-sm placeholder-gray-500 border-gray-300 focus:ring-0 focus:outline-none focus:border-cyan-300`}
                  type="text"
                  {...register('lastName')}
                  placeholder="Last Name"
                />
                <div className="h-5">
                  {errors.lastName?.message && (
                    <p className="text-xs italic text-red-600">
                      {errors.lastName?.message}
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
                {data?.signUpContent.formContent.buttonText}
              </button>
              <p className="text-xs font-bold" style={{ color: color }}>
                {data?.signUpContent.formContent.extraText}
              </p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
