import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { RegisterUserTypes } from '../types';

export const userRegisterMutation = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: async (userInformations: Pick<RegisterUserTypes, 'name' | 'password' | 'email'>) => {
      const { password, name, email } = userInformations;
      const { data } = await axios.post('http://localhost/api/users', { password, name, email });
      return data;
    },
    onSuccess(data: any) {
      toast.success(data.message);
    },
    onError(err: any) {
      toast.error(err.response.data.message || err.message);
    },
  });
  return { mutate, isLoading };
};
