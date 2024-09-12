import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { AppBar, Box, IconButton, Toolbar, Typography,   } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Appbar from "./components/appBar/Appbar";
const App: React.FC = () => {
  
  return (
    <Box display="flex" width="100%" >
    <Appbar />
      <Box display="flex" border = "1px solid red"flexGrow = {1} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
