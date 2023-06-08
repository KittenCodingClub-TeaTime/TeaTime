import { useAuthStore } from '../store/store';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const AuthoriseUser = ({ children }: any) => {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to={'/login'} replace={true} />;
  }

  return children;
};

export const Protectroute = ({ children }: any) => {
  const userName = useAuthStore.getState().auth.userInfos.name;
  console.log(userName);
  if (!userName) {
    return <Navigate to={'/login'} replace={true}></Navigate>;
  }
  return children;
};
