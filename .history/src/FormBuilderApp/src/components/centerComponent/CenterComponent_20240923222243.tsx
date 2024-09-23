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
  { text: "Text Field", icon: <TextField /> },
  { text: "Password Field", icon: <TextField /> },
  { text: "Email Field", icon: <TextField /> },
  { text: "Text Input", icon: <TextField /> },
  { text: "Number Input", icon: <TextField /> },
  { text: "File Upload", icon: <FileUpload /> },
  { text: "Paragraph", icon: <TextareaAutosize /> },
  { text: "Checkbox", icon: <CheckBox /> },
  { text: "Radio Button", icon: <RadioButtonChecked /> },
  { text: "Header", icon: <HMobiledata /> },
  { text: "Phone Input", icon: <PhoneAndroid /> },
  { text: "Dropdown", icon: <ArrowDropDownCircle /> },
  { text: "Page Break", icon: <InsertPageBreak /> },
  { text: "Button", icon: <SmartButton /> },
];

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
              <TextField fullWidth  id="fullWidth" /></Box>):
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
