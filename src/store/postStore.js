import { create } from 'zustand';

const usePostStore = create((set) => ({
  post: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] }))
  // deletar post
  // comentar post
  // adicionar post
}));

export default usePostStore;
