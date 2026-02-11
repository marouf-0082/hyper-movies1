import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/404";
import Movie from "./Pages/Movie";
import Login from "./Pages/Login";
import UserProvider from "./context/userContext";
import Profile from "./Pages/Profile";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <div>TV Shows Page</div>,
      },
      {
        path: "/people",
        element: <div>people page</div>,
      },
      {
        path: "/more",
        element: <div>more page</div>,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
