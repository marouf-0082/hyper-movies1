import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/404";
import Movie from "./Pages/Movie";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Person from "./Pages/Person";
import Tv from "./Pages/Tv";

export const router = createBrowserRouter([
  {
    element: (
        <App />
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
        path: "/tv/:id",
        element: <Tv/>,
      },
      {
        path: "/people/:id",
        element: <Person/>,
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
