import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Classes from './components/Class/classes.jsx';
import Races from './components/Race/races.jsx';
import Subraces from './components/Subrace/subraces.jsx';
import Attribute from './components/Attributes/attribute.jsx';
import Skill from './components/Skills/skill.jsx';
import Spell from './components/Spells/spell.jsx';
import Backgrounds from './components/Background/backgrounds.jsx';
import Editor from './components/Sandbox/editor.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/js/src/dropdown.js";


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: 
      [
        {
          index: true,
          element: <Classes />,
        },
        {
          path: '/race',
          element: <Races />,
        },
        {
          path: '/subrace',
          element: <Subraces />,
        },
        {
          path: '/attributes',
          element: <Attribute />,
        },
        {
          path: '/skills',
          element: <Skill />,
        },
        {
          path: '/spells',
          element: <Spell />,
        },
        {
          path: '/background',
          element: <Backgrounds />,
        },
        {
          path: '/sandbox',
          element: <Editor />,
        },
      ]
    }
  ]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
