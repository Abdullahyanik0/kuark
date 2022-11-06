import { PageNotFound } from "components/atoms";
import { Home, Character, Login, Register } from "pages";

export const items = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "*", element: <PageNotFound /> },
];
