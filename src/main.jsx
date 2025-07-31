import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/Global.css';
import { useContext } from 'react';
import './App.css';
import CustomCursor from './CustomCursor';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { NightModeProvider } from './NightModeContext';
import NightModeContext from './NightModeContext'; // <== You also need this!
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

const RootLayout = () => {
  const { color } = useContext(NightModeContext);

  return (
    <>
      <CustomCursor color={color} />
      <Outlet />
    </>
  );
};

// Define your routes with createBrowserRouter

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "creativework", element: <Projects /> },
      { path: "creativework/:ProjectId", element: <ProjectDetails /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <NightModeProvider> {/* Wrap RouterProvider with NightModeProvider */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </NightModeProvider>,
);
