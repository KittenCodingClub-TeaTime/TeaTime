import { FC } from 'react';
import toast from 'react-hot-toast';
import Auth from '../../components/auth';
import { registerSchema } from '../../helpers/schemas/user';
import { InputsType } from '../../types';
import { userRegisterMutation } from '../../hooks';

const Register: FC = ({}) => {
  const { mutate, isLoading } = userRegisterMutation();

  const handleSave = async (userInformations: any) => {
    mutate(userInformations);
    isLoading && toast.loading("Enregistrement de l'utilisateur en cours");
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

  return <Auth handleSave={handleSave} zodSchema={registerSchema} params={params} inputs={inputs} />;
};

export default Register;
