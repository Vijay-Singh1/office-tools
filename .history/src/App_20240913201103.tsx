import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/common/appBar/sidebar/Sidebar";
import { AppBar, Box, IconButton, Stack, Toolbar, Typography,   } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Appbar from "./components/common/appBar/Appbar";
import {DndContext} from '@dnd-kit/core';
const App: React.FC = () => {
  
  return (
    <DndContext>
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
