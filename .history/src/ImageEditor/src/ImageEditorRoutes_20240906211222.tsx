import React from 'react';
import { RouteObject } from 'react-router-dom';
import ImageEditorMain from './pages/ImageEditorMain';
import ImageEditorHome from './pages/ImageEditorHome';
import CreateImage from './pages/CreateImage';


export const imageEditorRoutes: RouteObject[] = [
  {
    path: 'image-editor',
    element: < ImageEditorMain/>,
    children: [
      {
        path: '/image-editor',
        element: <ImageEditorHome />,
      },
      {
        path: '/image-editor/Create-Image',
        element: <CreateImage />,
      },
      
    ],
  },
];
