import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/Home.jsx";
// import Class from "./components/Class/class.jsx";
import Race from "./components/Race/race.jsx";
import Subrace from "./components/Subrace/subrace.jsx";
import Attributes from "./components/Attributes/attributes.jsx";
import Skills from "./components/Skills/skills.jsx";
import Background from "./components/Background/background.jsx";
// import Sandbox from './components/Sandbox/sandbox.jsx';
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Removed Bootstrap
// import "../node_modules/bootstrap/js/src/dropdown.js";

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
