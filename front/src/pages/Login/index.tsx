import { FC } from 'react';
import { Auth } from '../../components';
import { loginSchema } from '../../helpers/schemas/user';
import { InputsType } from '../../types';
import { userSigninQuery } from '../../hooks';

const Login: FC = ({}) => {
  const { mutate, isLoading } = userSigninQuery();

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
