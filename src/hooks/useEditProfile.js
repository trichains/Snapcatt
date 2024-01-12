import { useState } from 'react';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { doc, updateDoc } from 'firebase/firestore';
import { storage, firestore } from '../firebase/firebase';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import firebaseErrors from '../Utils/firebaseErrors';
import useUserProfileStore from '../store/userProfileStore';

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, 'users', authUser.uid);

    let URL = '';
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, 'data_url');
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }

      const updatedUser = {
        ...authUser,
        username: inputs.username || authUser.username,
        fullName: inputs.fullName || authUser.fullName,
        bio: inputs.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL
      };

      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem('user-info', JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
      showToast('Sucesso', 'Alterações salvas com sucesso', 'success');
    } catch (error) {
      showToast('Erro', firebaseErrors[error.code], 'error');
    }
  };

  return { editProfile, isUpdating };
};

export default useEditProfile;
