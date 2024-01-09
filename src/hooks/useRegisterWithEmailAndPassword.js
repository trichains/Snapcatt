import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where
} from 'firebase/firestore';
import useShowToast from './useShowToast';
import firebaseErrors from '../../firebaseErrors';
import useAuthStore from '../store/authStore';

const useRegisterWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const register = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast('Error', 'Por favor, preencha todos os campos', 'error');
      return;
    }

    const usersRef = collection(firestore, 'users');
    const userQuery = query(usersRef, where('username', '==', inputs.username));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      showToast('Erro', 'Esse nome de usuário já existe.', 'error');
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        showToast('Erro', firebaseErrors[error.code], 'error');
        return;
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: '',
          profilePicURL: '',
          followers: [],
          following: [],
          posts: [],
          createAt: Date.now()
        };
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
        localStorage.setItem('user-info', JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast('Erro', firebaseErrors[error.code], 'error');
    }
  };
  return { loading, error, register };
};

export default useRegisterWithEmailAndPassword;
