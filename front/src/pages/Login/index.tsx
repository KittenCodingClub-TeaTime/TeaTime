import { FC } from 'react';
import toast from 'react-hot-toast';
import Auth from '../../components/auth';
import { loginSchema } from '../../helpers/schemas/user';
import { InputsType } from '../../types';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { RegisterUserTypes } from '../../types';

const Login: FC = ({}) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: async (userInformations: Pick<RegisterUserTypes, 'password' | 'email'>) => {
      console.log(userInformations);
      const { password, email } = userInformations;
      const { data } = await axios.post('http://localhost/api/auth/signin', { password, email });
      return data;
    },
    onSuccess(data: any) {
      toast.success(data.message);
    },
    onError(err: any) {
      toast.error(err.response.data.message || err.message);
    },
  });
  const handleSave = (userInformations: any) => {
    mutate(userInformations);
  };

  const inputs: InputsType = [
    { text: 'email', type: 'text' },
    { text: 'password', type: 'password' },
  ];

  const params = {
    text: 'Login',
    redirection: 'register',
  };

  return <Auth isLoading={isLoading} handleSave={handleSave} zodSchema={loginSchema} params={params} inputs={inputs} />;
};

export default Login;
