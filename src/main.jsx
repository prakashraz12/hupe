import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/index.home.jsx";
import PostList from "./pages/post/list/index.post-list.jsx";
import SinglePost from "./pages/post/single/index.post-single.jsx";
import Login from "./pages/login/index.login.jsx";
import Register from "./pages/register/index.register.jsx";
import Write from "./pages/write/index.write.jsx";
import MainLayout from "./layout/main-layout/main.layout.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/post",
        element: <SinglePost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
