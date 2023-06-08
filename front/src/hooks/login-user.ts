import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { RegisterUserTypes } from '../types';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/store';

export const userSigninQuery = () => {
  const setUserInfos = useAuthStore((state: any) => state.setUserInfos);
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: async (userInformations: Pick<RegisterUserTypes, 'password' | 'email'>) => {
      const { password, email } = userInformations;
      const { data } = await axios.post('http://localhost/api/auth/signin', { password, email });
      return data;
    },
    onSuccess(data: any) {
      toast.success(data.message);
      setUserInfos(data.body);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    },
    onError(err: any) {
      toast.dismiss();
      toast.error(err.response.data.message || err.message);
    },
  });
  return { mutate, isLoading };
};
