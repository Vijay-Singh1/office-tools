import React from 'react';
import { RouteObject } from 'react-router-dom';
import FormBuilderHome from './pages/FormBuilderHome';
import CreateForm from './pages/CreateForm';
import OpenForms from './pages/OpenForms';
import FormBuilderMain from './pages/FormBuilderMain';


export const formBuilderRoutes: RouteObject[] = [
  {
    path: 'form-builder',
    element: < FormBuilderMain/>,
    children: [
      {
        path: '/form-builder',
        element: <FormBuilderHome />,
      },
      {
        path: '/form-builder/Create-Form',
        element: <CreateForm />,
      },
      {
        path: '/form-builder/Open-Form',
        element: <OpenForms />,
      },
    ],
  },
];
