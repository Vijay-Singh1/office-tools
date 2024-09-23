import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppedItem {
  id: string;
  content: string;
}

const CenterComponent: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);

  // Droppable logic
  const { isOver, setNodeRef } = useDroppable({
    id: 'center-droppable',
  });

  const handleDrop = (item: DroppedItem) => {
    setDroppedItems([...droppedItems, item]);
  };

  return (
    <Box ref={setNodeRef} sx={{ height: 1000, overflowY: "scroll", flex: 4, bgcolor: "white" }}>
      <Stack direction="column" spacing={6}>
        <Box sx={{ bgcolor: isOver ? 'lightgreen' : 'white', p: 2 }}>
          <Typography variant="h6" align="center">Drop your elements here</Typography>
          {droppedItems.map((item, idx) => (
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
