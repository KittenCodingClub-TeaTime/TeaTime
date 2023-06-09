import { FC } from 'react';
import styles from '../../styles/Username.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { InputsType, RegisterUserTypes } from '../../types';

interface indexProps {
  handleSave: any;
  zodSchema: any;
  isLoading: boolean;
  params: {
    text: string;
    redirection: string;
  };
  inputs: InputsType;
}

const Auth: FC<indexProps> = ({ handleSave, isLoading, zodSchema, params, inputs }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserTypes>({
    resolver: zodResolver(zodSchema),
  });

  const spinner = () => {
    return (
      <div>
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: '45%', paddingTop: '3em' }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">{params.text}</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">Happy to see you!</span>
          </div>

          <form className="py-1" onSubmit={handleSubmit(handleSave)}>
            <div className="textbox flex flex-col items-center justify-center gap-4">
              {inputs.map((inputItem, index) => (
                <div key={index} className="w-full flex flex-col items-center justify-center">
                  <input
                    {...register(inputItem.text)}
                    className={styles.textbox}
                    type={inputItem.type}
                    placeholder={inputItem.text}
                  />
                  {errors[inputItem.text] && <p className={styles.error}>{errors[inputItem.text]?.message}</p>}
                </div>
              ))}
              <button className={styles.btn} type="submit">
                {params.text}
                {isLoading && spinner()}
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                {params.redirection === 'login' ? 'Already registered' : 'Need an account'} ?{' '}
                <Link className="text-red-500" to={`/${params.redirection}`}>
                  {params.redirection === 'login' ? 'Login Now' : 'Register Now'}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
