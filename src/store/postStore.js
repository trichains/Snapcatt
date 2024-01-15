import { create } from 'zustand';

const usePostStore = create((set) => ({
  post: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  // comentar post
  setPosts: (posts) => set({ posts })
}));

export default usePostStore;
