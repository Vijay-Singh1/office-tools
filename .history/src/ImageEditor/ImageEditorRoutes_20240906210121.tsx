import React from 'react';
import { RouteObject } from 'react-router-dom';
import FormBuilderHome from './pages/FormBuilderHome';
import CreateForm from './pages/CreateForm';
import OpenForms from './pages/OpenForms';
import FormBuilderMain from './pages/FormBuilderMain';
import ImageEditorMain from './pages/ImageEditorMain';
import ImageEditorHome from './pages/ImageEditorHome';
import CreateImage from './pages/CreateImage';


export const formBuilderRoutes: RouteObject[] = [
  {
    path: 'form-builder',
    element: < ImageEditorMain/>,
    children: [
      {
        path: '/form-builder',
        element: <ImageEditorHome />,
      },
      {
        path: '/form-builder/Create-Form',
        element: <CreateImage />,
      },
      
    ],
  },
];
