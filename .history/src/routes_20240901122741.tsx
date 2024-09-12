import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Sidebar from './components/sidebar';
import { formBuilderRoutes } from './FormBuilderApp/src/formBuilderRoutes';

// Combine routes from different modules
const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
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
