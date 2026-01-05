import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Pages/Home";
import Movies from "./components/Pages/Movies";
import NotFound from "./components/Pages/404";


export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/movies",
                element: <Movies/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])