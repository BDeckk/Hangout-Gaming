import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout";
import Signup from "./Components/SignUp";
import Signin from "./Components/Signin";
import Dashboard from "./Pages/Dashboard";
import { Profile } from "./Pages/Profile";
import { Gallery } from "./Pages/Gallery";
import { Members } from "./Pages/Members";
import { About } from "./Components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "signin", element: <Signin /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "about", element: <About /> },
      { path: "profile", element: <Profile /> },
      { path: "gallery", element: <Gallery /> },
      { path: "members", element: <Members /> },
    ],
  },
]);
