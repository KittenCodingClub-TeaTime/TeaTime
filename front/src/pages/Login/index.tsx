import { FC } from 'react';
import toast from 'react-hot-toast';
import Auth from '../../components/auth';
import { loginSchema } from '../../helpers/schemas/user';
import { InputsType } from '../../types';

const Login: FC = ({}) => {
  const handleSave = (data: any) => {
    toast.success('Register Successfully...!');
    console.log(data);
    //TODO: SEND THE VALUES TO THE BACK
  };

  const inputs: InputsType = [
    { text: 'username', type: 'text' },
    { text: 'password', type: 'password' },
  ];

  const params = {
    text: 'Login',
    redirection: 'register',
  };

  return <Auth handleSave={handleSave} zodSchema={loginSchema} params={params} inputs={inputs} />;
};

export default Login;
