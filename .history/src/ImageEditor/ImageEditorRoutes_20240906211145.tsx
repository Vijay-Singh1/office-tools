import React from 'react';
import { RouteObject } from 'react-router-dom';
import ImageEditorMain from './src/pages/ImageEditorMain';
import ImageEditorHome from './src/pages/ImageEditorHome';
import CreateImage from './src/pages/CreateImage';


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
