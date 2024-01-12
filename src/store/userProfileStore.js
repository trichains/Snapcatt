import { create } from 'zustand';

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // Isso é usado para atualizar o número de postagens na página de perfil
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [post.id, ...state.userProfile.posts]
      }
    }))
}));

export default useUserProfileStore;
