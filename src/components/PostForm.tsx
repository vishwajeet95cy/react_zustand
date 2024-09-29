import { useState } from "react";
import { usePostStore } from "../store";

const PostForm = () => {
  const { addPost } = usePostStore();

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    addPost({ ...data, id: new Date().getMilliseconds().toString() });
    setData({ ...data, title: "", content: "" });
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form className="form_container">
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <textarea name="content" value={data.content} onChange={handleChange} />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
