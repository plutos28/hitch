import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Root from './routes/root.jsx'
import LandingPage from './routes/LandingPage.jsx'
import Home from './routes/home.jsx'
import './css/output.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/app",
    element: <Root />,
    children: [
      {
        path: "home/",
        element: <Home />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
