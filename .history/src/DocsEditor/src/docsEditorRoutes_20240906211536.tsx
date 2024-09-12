import React from 'react';
import { RouteObject } from 'react-router-dom';
import DocsEditorMain from './pages/DocsEditorMain';
import DocsEditorHome from './pages/DocsEditorHome';
import CreateDocs from './pages/CreateDocs';


export const docsEditorRoutes: RouteObject[] = [
  {
    path: 'form-builder',
    element: < DocsEditorMain/>,
    children: [
      {
        path: '/form-builder',
        element: <DocsEditorHome />,
      },
      {
        path: '/form-builder/Create-Form',
        element: <CreateDocs />,
      },
     
    ],
  },
];
