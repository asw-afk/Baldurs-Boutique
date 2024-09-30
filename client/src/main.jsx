import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/Home.jsx";
import "./index.css";

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
      //   path: "/race",
      //   element: <Race />,
      // },
      // {
      //   path: "/subrace",
      //   element: <Subrace />,
      // },
      // {
      //   path: "/attributes",
      //   element: <Attributes />,
      // },
      // {
      //   path: "/skills",
      //   element: <Skills />,
      // },
      // {
      //   path: "/background",
      //   element: <Background />,
      // },
      // ,
      // {
      //   path: '/sandbox',
      //   element: <Sandbox />,
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
