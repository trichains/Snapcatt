import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';
import { auth, firestore } from '../firebase/firebase';
import firebaseErrors from '../utils/firebaseErrors';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast('Erro', 'Por favor, preencha todos os campos', 'error');
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCred) {
        const docRef = doc(firestore, 'users', userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem('user-info', JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast('Erro', firebaseErrors[error.code], 'error');
    }
  };

  return { login, loading, error };
};

export default useLogin;
