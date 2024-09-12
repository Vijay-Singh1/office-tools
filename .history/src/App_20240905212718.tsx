import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/common/appBar/sidebar/Sidebar";
import { AppBar, Box, IconButton, Stack, Toolbar, Typography,   } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Appbar from "./components/common/appBar/Appbar";
const App: React.FC = () => {
  
  return (
    <Box display="flex" flex={1}>
      <Stack direction="column">
    <Appbar/>
      <Box>
        <Outlet />
      </Box>
      </Stack>
    </Box>
  );
};

export default App;
