import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import "./tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   index: true,
      //   element: <Class />,
      // },
      // {
      //   path: '/race',
      //   element: <Race />,
      // },
      // {
      //   path: '/subrace',
      //   element: <Subrace />,
      // },
      // {
      //   path: '/attributes',
      //   element: <Attributes />,
      // },
      // {
      //   path: '/skills',
      //   element: <Skills />,
      // },
      // {
      //   path: '/background',
      //   element: <Background />,
      // }
      // ,
      // {
      //   path: '/sandbox',
      //   element: <Sandbox />,
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
