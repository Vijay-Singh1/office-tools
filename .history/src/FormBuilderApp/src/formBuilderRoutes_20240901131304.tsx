import React from 'react';
import { RouteObject } from 'react-router-dom';
import FormBuilderHome from './pages/FormBuilderHome';
import CreateForm from './pages/CreateForm';
import OpenForms from './pages/OpenForms';


export const formBuilderRoutes: RouteObject[] = [
  {
    path: 'createForm',
    element: <FormBuilderHome />,
    children: [
      {
        path: '/createForm/Create-Form',
        element: <CreateForm />,
      },
      {
        path: '/createForm/Create-Form',
        element: <OpenForms />,
      },
    ],
  },
];
