import { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';
import useUserProfileStore from '../store/userProfileStore';
import useShowToast from './useShowToast';
import firebaseErrors from '../../firebaseErrors';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useFollowUser = (user_ID) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, 'users', authUser.uid);
      const userToFollowOrUnfollowRef = doc(firestore, 'users', user_ID);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(user_ID) : arrayUnion(user_ID)
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid)
      });

      if (isFollowing) {
        // unfollow
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== user_ID)
        });
        setUserProfile({
          ...userProfile,
          followers: userProfile.followers.filter((uid) => uid !== authUser.uid)
        });

        localStorage.setItem(
          'user-info',
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== user_ID)
          })
        );
        setIsFollowing(false);
      } else {
        // follow
        setAuthUser({
          ...authUser,
          following: [...authUser.following, user_ID]
        });
        setUserProfile({
          ...userProfile,
          followers: [...userProfile.followers, authUser.uid]
        });

        localStorage.setItem(
          'user-info',
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, user_ID]
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      showToast('Erro', firebaseErrors[error.code], 'error');
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(user_ID);
      setIsFollowing(isFollowing);
    }
  }, [authUser, user_ID]);

  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
