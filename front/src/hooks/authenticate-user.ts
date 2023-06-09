import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/store';
import Cookies from 'js-cookie';

export const authenticateUserQuery = () => {
  const setUserInfos = useAuthStore((state: any) => state.setUserInfos);
  const token = Cookies.get('token');

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post('http://localhost/api/auth/authenticate', { token: token });
      return data;
    },
    onSuccess(data: any) {
      setUserInfos(data.body);
    },
    onError(err: any) {
      toast.error(err.response.data.message || err.message);
      Cookies.remove('token');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    },
  });
  return { mutate, isLoading };
};
