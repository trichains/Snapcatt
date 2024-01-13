import { create } from 'zustand';

const usePostStore = create((set) => ({
  post: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  // deletar post
  // comentar post
  setPosts: (posts) => set({ posts }),
}));

export default usePostStore;
