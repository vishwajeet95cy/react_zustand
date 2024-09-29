import "./App.css";
import PostForm from "./components/PostForm";
import UserForm from "./components/UserForm";
import { usePostStore, useUserStore } from "./store";

function App() {
  const { username, email } = useUserStore();

  const { posts, deletePost } = usePostStore();

  return (
    <main className="main_container">
      <div className="container">
        <section className="user">
          <div>{username}</div>
          <div>{email}</div>
          <UserForm />
        </section>
        <section className="post">
          <PostForm />
        </section>
      </div>
      <section className="post_container">
        {posts.map((post) => (
          <aside key={post.id} className="post_item">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button
              type="button"
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </button>
          </aside>
        ))}
      </section>
    </main>
  );
}

export default App;
