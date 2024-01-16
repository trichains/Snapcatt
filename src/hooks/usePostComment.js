import { useState } from 'react';
import useShowToast from './useShowToast';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import usePostStore from '../store/postStore';
import useAuthStore from '../store/authStore';

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const addComment = usePostStore((state) => state.addComment);

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) return;
    if (!authUser)
      return showToast(
        'Erro',
        'Você precisa estar logado para comentar',
        'error'
      );
    setIsCommenting(true);
    const newComment = {
      comment,
      createdBy: authUser.uid,
      createdAt: Date.now(),
      postId
    };

    try {
      await updateDoc(doc(firestore, 'posts', postId), {
        comments: arrayUnion(newComment)
      });
      addComment(postId, newComment);
    } catch (error) {
      showToast('Erro', error.message, 'error');
    } finally {
      setIsCommenting(false);
    }
  };

  return { handlePostComment, isCommenting };
};

export default usePostComment;
