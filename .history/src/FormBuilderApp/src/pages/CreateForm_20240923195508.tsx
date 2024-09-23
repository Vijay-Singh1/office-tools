
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import { Stack } from '@mui/material';
import FormSidebar from '../components/sidebar/Sidebar';
import CenterComponent from '../components/centerComponent/CenterComponent';
import RightBar from '../components/RightBar/RightBar';
import { DndContext } from 'react-dnd';



const CreateForm : React.FC = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (droppedItem: { id: string; content: string }) => {
    setDroppedItems((prevItems) => [...prevItems, droppedItem]);
  };
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && over.id === 'center-droppable') {
      // You can pass the dragged item details from `active` to `handleDrop`
      // For example, let's assume `active.id` contains the text or id of the field.
      const droppedItem = {
        id: active.id,
        content: active.data.current?.text || "Dropped item",
      };
      handleDrop(droppedItem); // This will update the center component's state
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
    <Box   flex ={1} sx={{
      mb: 2,
      height: "100%",
      overflow: "hidden",
      // overflowY: "scroll",
     // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    }}  >
      <Stack direction="row" spacing={4}  justifyContent={"space-between"} sx={{ height: '100%' }}  >
      <FormSidebar/>
      <CenterComponent droppedItems={droppedItems}/>
      <RightBar/>
    </Stack>
    </Box>
    </DndContext>
  )
}

export default CreateForm
