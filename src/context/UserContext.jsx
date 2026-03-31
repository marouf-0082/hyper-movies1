import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { fench } from "../services/fench";

export const UserContext = createContext({ user: null, session: null });

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
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
    fetchFavoriteMovies(data.id);
    setUser(data);
  }

  async function fetchFavoriteMovies(id = user.id) {
    const favResult = await fench.get(`/account/${id}/favorite/movies`);
    setFavoriteMovies(favResult.data.results);
  }

  useEffect(() => {
    if (session) {
      localStorage.setItem("session", session);
      getUserData();
      if (location.pathname === "/login") {
        navigate("/profile", { replace: true });
      }
    }
  }, [session]);

  // Login function
  async function Login(username, password) {
    try {
      const tokenResult = await fench.get("/authentication/token/new");
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

      toast.success("Login successful!");
      setSession(session.data.session_id);
    } catch {
      toast.error("Invalid username or password!");
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        Login,
        session,
        logout,
        favoriteMovies,
        fetchFavoriteMovies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
