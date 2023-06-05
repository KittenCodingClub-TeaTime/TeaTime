import { FC } from 'react';
import toast from 'react-hot-toast';
import Auth from '../../components/auth';
import { registerSchema } from '../../helpers/schemas/user';
import { InputsType } from '../../types';

async function callAPI(payload: any) {
  return fetch(`http://localhost/api/${payload.endPoint}`, {
    method: payload.method,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload.body),
  });
}

const Register: FC = ({}) => {
  const handleSave = async (data: any) => {
    const payload = {
      method: 'POST',
      body: data,
      endPoint: 'auth/signup',
    };
    const response = await callAPI(payload);
    const json = await response.json();
    if (json.error) {
      toast.error(json.message);
    } else {
      toast.success(json.message);
    }
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
