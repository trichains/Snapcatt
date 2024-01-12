import { useState } from 'react';
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import firebaseErrors from '../Utils/firebaseErrors';

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const searchUser = async (username) => {
    setIsLoading(true);
    try {
      const q = query(
        collection(firestore, 'users'),
        where('username', '==', username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty)
        return showToast('Erro', 'Usuário não encontrado', 'error');

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      showToast('Erro', firebaseErrors[error.code], 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return { user, isLoading, searchUser, setUser };
};

export default useSearchUser;
