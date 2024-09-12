import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { formBuilderRoutes } from './FormBuilderApp/src/formBuilderRoutes';
import App from './App';
import { imageEditorRoutes } from './ImageEditor/src/ImageEditorRoutes';

// Combine routes from different modules
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...formBuilderRoutes,
      ...imageEditorRoutes
      // Add other module routes here
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
