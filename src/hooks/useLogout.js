import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useShowToast from './useShowToast';
import firebaseErrors from '../utils/firebaseErrors';

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('user-info');
    } catch (error) {
      showToast('Erro', firebaseErrors[error.code], 'error');
    }
  };
  return { handleLogout, isLoggingOut, error };
};

export default useLogout;
