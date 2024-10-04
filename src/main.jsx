import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/Global.css';
import './App.css';

import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { NightModeProvider } from './NightModeContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

// Define your routes with createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:ProjectId",
    element: <ProjectDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <NightModeProvider> {/* Wrap RouterProvider with NightModeProvider */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </NightModeProvider>,
);
