import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/store';

export const logOutUserQuery = () => {
  const setUserInfos = useAuthStore((state: any) => state.setUserInfos);

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.get('http://localhost/api/auth/signout');
      return data;
    },
    onSuccess() {
      setUserInfos({ email: '', name: '' });
      navigate('/login');
    },
    onError(err: any) {
      toast.dismiss();
      toast.error(err.response.data.message || err.message);
    },
  });
  return { mutate, isLoading };
};
