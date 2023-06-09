import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { RegisterUserTypes } from '../types';
import { useNavigate } from 'react-router-dom';

export const userRegisterMutation = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: async (userInformations: Pick<RegisterUserTypes, 'name' | 'password' | 'email'>) => {
      const { password, name, email } = userInformations;
      const { data } = await axios.post('http://localhost/api/users', { password, name, email });
      return data;
    },
    onSuccess(data: any) {
      toast.success(data.message);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    },
    onError(err: any) {
      toast.dismiss();
      toast.error(err.response.data.message || err.message);
    },
  });
  return { mutate, isLoading };
};
