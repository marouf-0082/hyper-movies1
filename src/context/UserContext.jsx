import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ConfirmDialog } from 'primereact/confirmdialog';

export const UserContext = createContext({user: null, session: null});

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "79dfd1eff0a74377d493be823af77d22";

export default function UserProvider({ children }) {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(
    () => localStorage.getItem("session") || null
  );

  // Logout function
  function logout() {
    setUser(null);
    setSession(null);
    localStorage.removeItem("session");

  }

  async function getUserData() {
    const {data} = await axios.get(
      `${baseURL}/account?api_key=${apiKey}&session_id=${session}`
    );
    setUser(data);
  }

  useEffect(() => {
    if (session) {
      getUserData();
    }
  }, [session]);


  // Login function
  async function Login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${baseURL}/authentication/token/new?api_key=${apiKey}`
      );
      console.log(tokenResult.data.request_token);

      const authorize = await axios.post(
        `${baseURL}/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        }
      );

      const session = await axios.post(
        `${baseURL}/authentication/session/new?api_key=${apiKey}`,
        {
          request_token: tokenResult.data.request_token,
        }
      );

      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
      toast.success("Login successful!");
      navigate("/", {
        replace: true,
      })
    } catch {
      toast.error("Invalid username or password!");
    }
  }

  return (
    <UserContext.Provider value={{ user, Login, session, logout }}>
      {children}
    </UserContext.Provider>
  );
}
