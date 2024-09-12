import React from 'react';
import { RouteObject } from 'react-router-dom';
import FormBuilderHome from './pages/FormBuilderHome';
import CreateForm from './pages/CreateForm';


export const formBuilderRoutes: RouteObject[] = [
  {
    path: 'createForm',
    element: <FormBuilderHome />,
    children: [
      {
        path: 'Create-Form',
        element: <CreateForm />,
      },
    ],
  },
];
