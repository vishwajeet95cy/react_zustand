import { useUserStore } from "../store";

const UserForm = () => {
  const { username, email, setEmail, setUsername } = useUserStore();
  return (
    <div>
      <form className="form_container">
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
};

export default UserForm;
