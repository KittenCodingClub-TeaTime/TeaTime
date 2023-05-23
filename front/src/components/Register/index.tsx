import { FC } from 'react';
import styles from '../../styles/Username.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';
import { Link } from 'react-router-dom';

const schema = z
  .object({
    username: z.string().min(4, 'Username doit contenir au moins 4 characters'),
    email: z.string().email({ message: 'Adresse mail invalide' }),
    password: z.string().min(6, { message: 'Password must be atleast 6 characters' }),
    confirmPassword: z.string().min(1, { message: 'Passwords must match' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

interface MyInputTypes {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyInputTypes>({
    resolver: zodResolver(schema),
  });
  const handleSave = (data: any) => {
    toast.success('Register Successfully...!');
    console.log(data);
    //TODO: SEND THE VALUES TO THE BACK
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: '45%', paddingTop: '3em' }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">Happy to see you!</span>
          </div>

          <form className="py-1" onSubmit={handleSubmit(handleSave)}>
            <div className="textbox flex flex-col items-center gap-4">
              <input {...register('email')} className={styles.textbox} type="text" placeholder="Email*" />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
              <input {...register('username')} className={styles.textbox} type="text" placeholder="Username*" />
              {errors.username && <p className={styles.error}>{errors.username.message}</p>}
              <input {...register('password')} className={styles.textbox} type="password" placeholder="Password*" />
              {errors.password && <p className={styles.error}>{errors.password.message}</p>}
              <input
                {...register('confirmPassword')}
                className={styles.textbox}
                type="password"
                placeholder="confirmPassword*"
              />
              {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Already registered ?{' '}
                <Link className="text-red-500" to="/login">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
