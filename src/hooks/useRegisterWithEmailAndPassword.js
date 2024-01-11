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

  const validateInput = (inputs) => {
    // Verificar se há espaços em branco no username
    if (inputs.username && /\s/.test(inputs.username)) {
      showToast(
        'Erro',
        'O nome de usuário não pode conter espaços em branco.',
        'error'
      );
      return false;
    }

    // Verificar se o email é válido
    const lowerCaseEmail = inputs.email.toLowerCase();
    const emailRegex = /^(?=.*[A-Za-z0-9._%+-]+@(hotmail|outlook|gmail)\.com$)/;
    if (!emailRegex.test(lowerCaseEmail)) {
      showToast(
        'Erro',
        'Por favor, insira um email válido (hotmail, outlook ou gmail com .com).',
        'error'
      );
      return false;
    }

    // Verificar o comprimento máximo do username e full name
    if (inputs.username.length > 15) {
      showToast(
        'Erro',
        'O nome de usuário deve ter no máximo 15 caracteres.',
        'error'
      );
      return false;
    }
    if (inputs.fullName.length > 20) {
      showToast(
        'Erro',
        'O nome completo deve ter no máximo 20 caracteres.',
        'error'
      );
      return false;
    }

    return true;
  };

  const register = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast('Erro', 'Por favor, preencha todos os campos.', 'error');
      return;
    }

    // Mover a declaração para o escopo da função register
    const lowerCaseUsername = inputs.username.toLowerCase();

    // Validar o username depois de definir lowerCaseUsername
    const usernameRegex = /^[a-zA-Z0-9-_]+$/;
    if (!usernameRegex.test(lowerCaseUsername)) {
      showToast(
        'Erro',
        'O nome de usuário só pode conter letras, números, - e _.',
        'error'
      );
      return;
    }

    // Validar os inputs
    if (!validateInput(inputs)) {
      return;
    }

    const usersRef = collection(firestore, 'users');
    const userQuery = query(
      usersRef,
      where('username', '==', lowerCaseUsername)
    );
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      showToast('Erro', 'Esse nome de usuário já existe.', 'error');
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
          email: inputs.email.toLowerCase(),
          username: lowerCaseUsername,
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
