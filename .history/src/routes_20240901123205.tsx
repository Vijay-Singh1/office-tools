import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Sidebar from './components/sidebar';
import { formBuilderRoutes } from './FormBuilderApp/src/formBuilderRoutes';
import App from './App';

// Combine routes from different modules
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...formBuilderRoutes
      // Add other module routes here
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
