import { createContext, useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { fench } from "../services/fench";

export const userContext = createContext({ user: null, session: null });

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "79dfd1eff0a74377d493be823af77d22";

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(
    () => localStorage.getItem("session") || null
  );
  const location = useLocation();

  // Logout function
  function logout() {
    setUser(null);
    setSession(null);
    localStorage.removeItem("session");
  }

  async function getUserData() {
    const { data } = await fench.get("/account");
    setUser(data);
  }

  useEffect(() => {
    if (session) {
      localStorage.setItem("session", session);
      toast.success("Login successful!");
      getUserData();
      if(location.pathname === '/login') {
        navigate('/profile', { replace: true });
      }
    }
  }, [session]);

  // Login function
  async function Login(username, password) {
    try {
      const tokenResult = await fench.get("/authentication/token/new");
      console.log(tokenResult.data.request_token);

      const authorize = await fench.post(
        `/authentication/token/validate_with_login`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        }
      );

      const session = await fench.post(`/authentication/session/new`, {
        request_token: tokenResult.data.request_token,
      });

      setSession(session.data.session_id);
    } catch {
      toast.error("Invalid username or password!");
    }
  }

  return (
    <userContext.Provider value={{ user, Login, session, logout }}>
      {children}
    </userContext.Provider>
  );
}
