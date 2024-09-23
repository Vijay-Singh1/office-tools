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
  { text: "Password Field", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Email Field", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Text Input", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Number Input", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "File Upload", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Paragraph", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Checkbox", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Radio Button", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Header", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Phone Input", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Dropdown", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Page Break", element: <TextField fullWidth  id="fullWidth" /> },
  { text: "Button", element: <TextField fullWidth  id="fullWidth" /> },
];


const getRenderedField = (droppedItemsText ) =>{
  const ele =  renderedElement.find((item) => item.text === droppedItemsText )
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
    <Box ref={setNodeRef} style={style} flex={4} bgcolor={"white"} sx={{ height: 1000, overflowY: "scroll" }}>
      <Stack direction="column" spacing={6}>
        <Box sx={{  p: 2 }}>
          <Typography variant="h6" align="center">Drop your elements here</Typography>
          {droppedItems.map((item, idx) => (
            item.id ==="item-1" ?(<Box><InputLabel htmlFor="name-input">{item.content}</InputLabel>
              {getRenderedField()}</Box>):
            <Typography key={idx} variant="body1" sx={{ mt: 2 }}>
              {item.content}
            </Typography>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default CenterComponent;
