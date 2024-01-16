import { useEffect, useState } from 'react';
import useShowToast from './useShowToast';
// import firebaseErrors from '../utils/firebaseErrors';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import useUserProfileStore from '../store/userProfileStore';

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, 'users'),
          where('username', '==', username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return setUserProfile(null);

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        setUserProfile(userDoc);
      } catch (error) {
        showToast('Erro', error.message[error.code], 'error');
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, showToast, username]);

  return { userProfile, isLoading };
};

export default useGetUserProfileByUsername;
