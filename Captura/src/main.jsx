import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import Flags from './routes/Flags';
import Zotrim from './routes/Zotrim';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/flags',
        element: <Flags />
      },
      {
        path: '/Zotrim',
        element: <Zotrim />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)