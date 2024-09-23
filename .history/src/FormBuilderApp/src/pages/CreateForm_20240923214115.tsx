import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import FormSidebar from '../components/sidebar/Sidebar';
import CenterComponent from '../components/centerComponent/CenterComponent';
import RightBar from '../components/RightBar/RightBar';
import { DndContext, DragOverlay } from '@dnd-kit/core'; // Correct import from @dnd-kit/core

const CreateForm: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const handleDrop = (droppedItem: { id: string; content: string }) => {
    setDroppedItems((prevItems) => [...prevItems, droppedItem]);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && over.id === 'center-droppable') {
      const droppedItem = {
        id: active.id,
        content: active.data.current?.text || 'Dropped item',
      };
      handleDrop(droppedItem); // This will update the center component's state
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        flex={1}
        sx={{
          mb: 2,
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Stack direction="row" spacing={4} justifyContent="space-between" sx={{ height: '100%' }}>
          <FormSidebar />
          <CenterComponent droppedItems={droppedItems} />
          <RightBar />
        </Stack>
      </Box>
      <DragOverlay>
        {activeId ? (
          <div
            style={{
              zIndex: 1000, // Set a high z-index for the overlay
              backgroundColor: 'white',
              padding: '10px',
              border: '1px solid #ccc',
            }}
          >
            Dragging item {activeId}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default CreateForm;
