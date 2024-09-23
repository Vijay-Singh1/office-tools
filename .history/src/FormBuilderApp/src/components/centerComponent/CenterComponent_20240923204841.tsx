import { Box, Input, InputLabel, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppedItem {
  id: string;
  content: string;
}

interface CenterComponentProps {
  droppedItems: DroppedItem[];
}


const CenterComponent: React.FC<CenterComponentProps> = ({ droppedItems }) => {
  console.log(droppedItems)
  const { isOver, setNodeRef } = useDroppable({
    id: 'center-droppable',
  });

  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <Box ref={setNodeRef} style={style} flex={4} bgcolor={"white"} sx={{ height: 1000, overflowY: "scroll" }}>
      <Stack direction="column" spacing={6}>
        <Box sx={{ bgcolor: isOver ? 'lightgreen' : 'white', p: 2 }}>
          <Typography variant="h6" align="center">Drop your elements here</Typography>
          {droppedItems.map((item, idx) => (
            item.id ==="item-1" ?(<Box><InputLabel htmlFor="name-input">Name</InputLabel>
              <TextField fullWidth label="fullWidth" id="fullWidth" /></Box>):
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
