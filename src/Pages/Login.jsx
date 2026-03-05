import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Login() {
  const { Login, session } = useContext(userContext);

  function handleLogin(e) {
    // Browser no reload the page
    e.preventDefault();
    const { username, password } = e.target.elements;

    console.log("Username:", username.value);
    console.log("Password:", password.value);

    Login(username.value, password.value);
  }

  return (
    <div>
      <h1>Login page</h1>
      <div className="flex flex-col justify-center items-center text-black">
        <form action="" onSubmit={handleLogin} className="flex flex-col gap-4 ">
          <input
            placeholder="Username"
            type="text"
            name="username"
            className="border-2 border-white p-2 text-white"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="border-2 border-white p-2 text-white"
          />
          <input
            type="submit"
            value="login"
            className="btn primary text-white"
          />
        </form>
      </div>
    </div>
  );
}
