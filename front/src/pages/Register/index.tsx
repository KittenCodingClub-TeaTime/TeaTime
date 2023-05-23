import { FC } from 'react';
import toast from 'react-hot-toast';
import Auth from '../../components/auth';
import { registerSchema } from '../../helpers/schemas/user';
import { InputsType } from '../../types';

const Register: FC = ({}) => {
  const handleSave = (data: any) => {
    toast.success('Register Successfully...!');
    console.log(data);
    //TODO: SEND THE VALUES TO THE BACK
  };

  const inputs: InputsType = [
    { text: 'username', type: 'text' },
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
