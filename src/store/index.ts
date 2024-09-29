import { create } from "zustand";
import { devtools } from "zustand/middleware";

// export interface UserSlice {
//   username: string;
//   email: string;
//   setUsername: (username: string) => void;
//   setEmail: (email: string) => void;
// }

// export const createUserSlice: StateCreator<UserSlice> = (set) => ({
//   username: "Vishwa",
//   email: "vishwa@gmail.com",
//   setUsername: (username: string) => set(() => ({ username })),
//   setEmail: (email: string) => set(() => ({ email })),
// });

// export const useAppStore = create(
//   devtools<UserSlice>((...a) => ({
//     ...createUserSlice(...a),
//   }))
// );

export interface UserStore {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create(
  devtools<UserStore>(
    (set) => ({
      username: "Vishwa",
      email: "vishwa@gmail.com",
      setUsername: (username: string) => set(() => ({ username })),
      setEmail: (email: string) => set(() => ({ email })),
    }),
    { name: "user", store: "user" }
  )
);

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  deletePost: (id: string) => void;
}

export const usePostStore = create(
  devtools<PostStore>(
    (set) => ({
      posts: [],
      setPosts: (posts: Post[]) => set(() => ({ posts })),
      addPost: (post: Post) =>
        set((state) => ({ posts: [...state.posts, post] })),
      deletePost: (id: string) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
    }),
    { name: "posts", store: "posts" }
  )
);
