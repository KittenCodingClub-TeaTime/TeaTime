import { FC } from 'react';
import Auth from '../../components/Auth';
import { registerSchema } from '../../helpers/schemas/user';
import { InputsType } from '../../types';
import { userRegisterMutation } from '../../hooks';

const Register: FC = ({}) => {
  const { mutate, isLoading } = userRegisterMutation();

  const handleSave = async (userInformations: any) => {
    mutate(userInformations);
  };

  const inputs: InputsType = [
    { text: 'name', type: 'text' },
    { text: 'email', type: 'text' },
    { text: 'password', type: 'password' },
    { text: 'confirmPassword', type: 'password' },
  ];

  const params = {
    text: 'Register',
    redirection: 'login',
  };

  return (
    <Auth isLoading={isLoading} handleSave={handleSave} zodSchema={registerSchema} params={params} inputs={inputs} />
  );
};

export default Register;
