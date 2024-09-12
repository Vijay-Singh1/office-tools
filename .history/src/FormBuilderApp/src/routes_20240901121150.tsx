import React from 'react';
import { RouteObject } from 'react-router-dom';
import FormBuilderHome from './pages/FormBuilderHome';
import CreateForm from './pages/CreateForm';


export const imageEditorRoutes: RouteObject[] = [
  {
    path: 'image-editor',
    element: <FormBuilderHome />,
    children: [
      {
        path: 'edit',
        element: <CreateForm />,
      },
    ],
  },
];
