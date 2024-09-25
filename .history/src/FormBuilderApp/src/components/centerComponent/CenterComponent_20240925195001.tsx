import { Box, Input, InputLabel, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { RenderedElementProps } from '../../pages/formTypes';


interface DroppedItem {
  id: string;
  content: string;
}

interface CenterComponentProps {
  droppedItems: DroppedItem[];
}

const renderedElement: RenderedElementProps[] = [
  { text: "Text Field", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Password Field", element: <TextField fullWidth  id="fullWidth"  type="password"/> },
  { text: "Email Field", element: <TextField fullWidth  id="fullWidth" type="email" /> },
  { text: "Text Input", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Number Input", element: <TextField fullWidth  id="fullWidth" type="number" /> },
  { text: "File Upload", element: <TextField fullWidth  id="fullWidth" type = "file" /> },
  { text: "Paragraph", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Checkbox", element: <TextField fullWidth  id="fullWidth" type = "checkbox" /> },
  { text: "Radio Button", element: <TextField fullWidth  id="fullWidth" type = "radio" /> },
  { text: "Header", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Phone Input", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Dropdown", element: <TextField fullWidth  id="fullWidth" type ="select" /> },
  { text: "Page Break", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Button", element: <TextField fullWidth  id="fullWidth" type = "button" /> },
];


const getRenderedField = (droppedItemsText ) =>{
  const ele =  renderedElement.find((item) => item.text === droppedItemsText )
  return ele.element
  console.log(ele)
}

const CenterComponent: React.FC<CenterComponentProps> = ({ droppedItems }) => {
  console.log(droppedItems)
  const { isOver, setNodeRef } = useDroppable({
    id: 'center-droppable',
  });

  const style = {
    // color: isOver ? 'green' : undefined,
    // bgcolor: isOver ? 'lightgreen' : 'white',
  };

  return (
    <Box ref={setNodeRef} style={style} flex={4} bgcolor={"white"} sx={{ height:"calc(100vh - 70px)", overflowY: "auto" }}>
      <Stack direction="column" spacing={6}>
        <Box sx={{  p: 2 }}>
          <Typography variant="h6" align="center">Drop your elements here</Typography>
          {droppedItems.map((item, idx) => (
            <Box><InputLabel htmlFor="name-input">{item.content}</InputLabel>
              {getRenderedField(item.content)}</Box>
            //   :
            // <Typography key={idx} variant="body1" sx={{ mt: 2 }}>
            //   {item.content}
            // </Typography>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default CenterComponent;
