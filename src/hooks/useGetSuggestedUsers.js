import { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where
} from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import firebaseErrors from '../utils/firebaseErrors';

const useGetSuggestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getSuggestedUsers = async () => {
      setIsLoading(true);
      try {
        const usersRef = collection(firestore, 'users');
        const q = query(
          usersRef,
          where('uid', 'not-in', [authUser.uid, ...authUser.following]),
          orderBy('uid'),
          limit(3)
        );

        const querySnapshot = await getDocs(q);
        const users = [];

        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        setSuggestedUsers(users);
      } catch (error) {
        showToast('Erro', firebaseErrors[error.code], 'error');
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) getSuggestedUsers();
  }, [authUser, showToast]);

  return { suggestedUsers, isLoading };
};

export default useGetSuggestedUsers;
