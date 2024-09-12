import React from 'react';
import { RouteObject } from 'react-router-dom';
import DocsEditorMain from './pages/DocsEditorMain';
import DocsEditorHome from './pages/DocsEditorHome';
import CreateDocs from './pages/CreateDocs';


export const docsEditorRoutes: RouteObject[] = [
  {
    path: '/docs-editor',
    element: < DocsEditorMain/>,
    children: [
      {
        path: '/docs-editor',
        element: <DocsEditorHome />,
      },
      {
        path: '/docs-editor/Create-docs',
        element: <CreateDocs />,
      },
     
    ],
  },
];
