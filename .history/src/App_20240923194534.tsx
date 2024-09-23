import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/common/appBar/sidebar/Sidebar";
import { AppBar, Box, IconButton, Stack, Toolbar, Typography,   } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Appbar from "./components/common/appBar/Appbar";
import {DndContext} from '@dnd-kit/core';
const App: React.FC = () => {
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
      <Stack direction="column" bgcolor = "#EEEDEB">
        <Appbar/>
      <Box>
        <Outlet />
      </Box>
      </Stack>
      </DndContext>
   
  );
};

export default App;
