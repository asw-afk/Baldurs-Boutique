// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
// import Header from './components/Header/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/js/src/dropdown.js"

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    //   children: [
    //     {
    //       index: true,
    //       element: <Header />,
    //     },
    //     ],
    }
  ]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
